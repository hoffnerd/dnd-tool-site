import { readFile, writeFileSync } from 'fs';
import manualOverrides from './manualOverrides.js';
import { arrayOfDisplaysToKeys, createAppearanceObj, createKey, createObj, createObjFromArrayOfObjs, createTraitsInRace, createNotConvertedObj, createSpellsForRace } from './conversionMethod.js';

const output = [
    // Change this based one what input and output is. Only one allowed to be active.
    { active: true, sourceKey: "source", sourceValue: "PHB" },
    { active: false, sourceKey: "", sourceValue: "" },
]

const files = [
    { input: "source/races", accessor: "race", output: "output/races" },
    // { input: "source_races", accessor: "race", output: "races" },
    // { input: "source_races", accessor: "race", output: "traits" },
    // { input: "source_races", accessor: "subrace", output: "traits" },
];

const connectors = [
    { sourceKey: "name", newKey: "key", conversionMethod: createKey, },
    { sourceKey: "name", newKey: "display", },
    { sourceKey: "size", newKey: "sizes", worksWith: [ "race", "subrace" ] },
    { sourceKey: ["heightAndWeight","age"], newKey: "appearance", conversionMethod: createAppearanceObj, specialConversion: true, worksWith: [ "race", "subrace" ] },
    { sourceKey: "speed", worksWith: [ "race", "subrace" ] },
    { sourceKey: "resist", worksWith: [ "race", "subrace" ] },
    { sourceKey: "weaponProficiencies", newKey: "weapon", conversionMethod: createObjFromArrayOfObjs, specialConversion: true, worksWith: [ "race", "subrace" ] },
    { sourceKey: "armorProficiencies", newKey: "armor", conversionMethod: createObjFromArrayOfObjs, specialConversion: true, worksWith: [ "race", "subrace" ] },
    { sourceKey: "languageProficiencies", newKey: "language", conversionMethod: createObjFromArrayOfObjs, specialConversion: true, worksWith: [ "race", "subrace" ] },
    { sourceKey: "ability", conversionMethod: createObjFromArrayOfObjs, specialConversion: true,  worksWith: [ "race", "subrace" ] },
    { sourceKey: "skillProficiencies", newKey: "skill", conversionMethod: createObjFromArrayOfObjs, specialConversion: true, worksWith: [ "race", "subrace" ] },
    { sourceKey: "additionalSpells", newKey: "spells", conversionMethod: createSpellsForRace, worksWith: [ "race", "subrace" ] },
    { sourceKey: "feats", newKey: "feat", conversionMethod: createObjFromArrayOfObjs, specialConversion: true, worksWith: [ "race", "subrace" ] },
    { sourceKey: "entries", newKey: "traits", conversionMethod: createTraitsInRace, worksWith: [ "race", "subrace" ] },
    { sourceKey: "traitTags", conversionMethod: arrayOfDisplaysToKeys, worksWith: [ "race", "subrace" ] },
    
    { newKey: "subraces", worksWith: [ "race" ] },

    { sourceKey: ["source","page","srd","basicRules","hasFluff","hasFluffImages"], newKey: "meta", conversionMethod: createObj, specialConversion: true,  worksWith: [ "race", "subrace" ] },

    { newKey: "notConverted" }
];

const addOverridesObj = true;

/*
    Race TODOs
        - additionalSpells (test on elf?)
        - 

*/

const manualOverride = (accessor, convertedData) => {
    const manualOverrideData = manualOverrides[accessor];
    let newConvertedData = [...convertedData];
    manualOverrideData.forEach((manualOverrideDataObj)=>{
        newConvertedData.forEach((convertedDataObj)=>{
            let overrides = {};
            if(manualOverrideDataObj.key === convertedDataObj.key){
                const manualOverrideDataObjKeys = Object.keys(manualOverrideDataObj);
                if(manualOverrideDataObjKeys && manualOverrideDataObjKeys.length > 0){
                    manualOverrideDataObjKeys.forEach((manualOverrideDataObjKey)=>{
                        overrides[manualOverrideDataObjKey] = convertedDataObj[manualOverrideDataObjKey];
                        convertedDataObj[manualOverrideDataObjKey] = manualOverrideDataObj[manualOverrideDataObjKey];
                    })
                }
            }
            if(addOverridesObj && overrides && Object.keys(overrides).length > 0){
                convertedDataObj.overrides = overrides
            }
        });
    })
    return newConvertedData;
}

const checkWorksWith = (fileObj, worksWith) => {
    let doesWorkWith = false;

    if(worksWith && Array.isArray(worksWith) && worksWith.length > 0){
        for (let i = 0; i < worksWith.length; i++){
            const worksWithAccessor = worksWith[i];
            if(fileObj.accessor === worksWithAccessor){
                doesWorkWith = true;
                break;
            }
        }
    } else {
        doesWorkWith = true;
    }

    return doesWorkWith;
}

const conversion = (fileObj, dataObj, fileData) =>{
    let convertedDataObj = {};

    connectors.forEach((connector) => {
        const { sourceKey, newKey, conversionMethod, specialConversion, worksWith, } = connector;
        if(checkWorksWith(fileObj, worksWith)){
            if(connector.newKey === "subraces"){
                convertedDataObj.subraces = execute(null, { accessor: "subrace" }, fileData, false, { raceName: dataObj.name })
            }
            if(connector.newKey === "notConverted"){
                convertedDataObj.notConverted = createNotConvertedObj(fileObj, connectors, checkWorksWith, dataObj)
            }
            else if(specialConversion && typeof conversionMethod === "function"){
                if(newKey){
                    convertedDataObj[newKey] = conversionMethod(sourceKey, dataObj)
                } else {
                    convertedDataObj[sourceKey] = conversionMethod(sourceKey, dataObj)
                }
            }
            else if(sourceKey && (typeof sourceKey === 'string' || sourceKey instanceof String) && dataObj[sourceKey]){
                if(typeof conversionMethod === "function"){
                    if(newKey){
                        convertedDataObj[newKey] = conversionMethod(dataObj[sourceKey])
                    } else {
                        convertedDataObj[sourceKey] = conversionMethod(dataObj[sourceKey])
                    }
                } else if(newKey){
                    convertedDataObj[newKey] = dataObj[sourceKey];
                } else {
                    convertedDataObj[sourceKey] = dataObj[sourceKey];
                }
            }
        }
    });

    return convertedDataObj;
}

const execute = (err, fileObj, fileData, shouldWrite = true, additionalInfo = null) => {
    if (err) { console.log(err); return; }
    const data = fileData[fileObj.accessor];
    let convertedData = [];

    data.forEach((dataObj) => {
        let goodToConvert = false;
        if(fileObj.accessor === "subrace"){
            if(additionalInfo && additionalInfo.raceName && additionalInfo.raceName === dataObj.raceName){
                goodToConvert = true;
            }
        } else if(dataObj){
            goodToConvert = true;
        }

        if(goodToConvert){
            let activeOutputObj = null; 
            for (let i = 0; i < output.length; i++){
                const outputObj = output[i];
                if(outputObj.active){
                    activeOutputObj = outputObj;
                    break;
                }
            }

            if(activeOutputObj && activeOutputObj.sourceKey && activeOutputObj.sourceValue && dataObj[activeOutputObj.sourceKey] && dataObj[activeOutputObj.sourceKey] === activeOutputObj.sourceValue){
                goodToConvert = true;
            } else{
                goodToConvert = false
            }
        }

        if(goodToConvert){ // && dataObj.name
            convertedData.push(conversion(fileObj, dataObj, fileData));
            // convertedData.push(createConvertedDataObj(fileObj, dataObj));
        }
    });

    if(shouldWrite){
        convertedData = manualOverride(fileObj.accessor, convertedData);
        // console.log(convertedData)
        const jsonString = JSON.stringify(convertedData);
        writeFileSync(`./${fileObj.output}.json`, jsonString);
    } else if (convertedData && convertedData.length > 0){
        return convertedData
    }
    return undefined
}

const jsonReader = (fileObj, filePath, callback) => {
    readFile(filePath, (err, fileData) => {
        if (err) {
            return callback && callback(err);
        }
        try {
            const object = JSON.parse(fileData);
            return callback && callback(null, fileObj, object);
        } catch (err) {
            return callback && callback(err);
        }
    });
}

files.forEach((fileObj) => {
    jsonReader(fileObj, `./${fileObj.input}.json`, execute);
});



/* 


- To excute this file, in the terminal write:
cd DND_JSON_Conversion
node conversion.js

*/