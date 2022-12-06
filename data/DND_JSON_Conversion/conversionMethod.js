export const createKey = (value) => {
    let key = value;
    if (typeof key === 'string' || key instanceof String){
        key = key.charAt(0).toLowerCase() + key.slice(1);
        key = key.replace(/\s+/g, '').replace(/[^a-zA-Z ]/g, "");
    } else {
        console.error("in createKey, given is not a string", {key, str})
    }
    return key;
}

export const createObj = (sourceKey, dataObj) => {
    let returnObj = {};
    if(sourceKey && Array.isArray(sourceKey) && sourceKey.length > 0){
        sourceKey.forEach((key) => {
            if(key && dataObj[key]){
                returnObj[key] = dataObj[key];
            }
        })
    }
    if(returnObj && Object.keys(returnObj).length > 0){
        return returnObj;
    }
    return undefined;
}

const cleanKey = (key) => {
    const reg = /(.+)\|(.+)/;
    const exectrated = reg.exec(key);
    let keyToClean = key;
    if (exectrated && Array.isArray(exectrated) && exectrated.length > 0 && exectrated[1]){
        keyToClean = exectrated[1]
    }
    return createKey(keyToClean);
}

export const createObjFromArrayOfObjs = (sourceKey, dataObj) => {
    let returnObj = {};
    if(sourceKey && (typeof sourceKey === 'string' || sourceKey instanceof String) && dataObj[sourceKey] && Array.isArray(dataObj[sourceKey]) && dataObj[sourceKey].length > 0){
        dataObj[sourceKey].forEach((internalDataObj) => {
            const keys = Object.keys(internalDataObj);
            if(keys && Array.isArray(keys) && keys.length > 0){
                keys.forEach((key) => {
                    if(key && internalDataObj[key]){
                        const cleanedKey = cleanKey(key);
                        returnObj[cleanedKey] = internalDataObj[key];
                        // Will override key value pairs. Add check to stop overriding
                    }
                })
            }
        })
    }
    if(returnObj && Object.keys(returnObj).length > 0){
        return returnObj;
    }
    return undefined;
}

export const createAppearanceObj = (sourceKey, dataObj) => {
    let returnObj = {};
    if(sourceKey && Array.isArray(sourceKey) && sourceKey.length > 0){
        sourceKey.forEach((key) => {
            switch (key) {
                case "heightAndWeight":
                    if(dataObj.heightAndWeight){
                        if(dataObj.heightAndWeight.baseHeight || dataObj.heightAndWeight.heightMod){
                            returnObj.height = {
                                base: dataObj.heightAndWeight.baseHeight ? dataObj.heightAndWeight.baseHeight : undefined,
                                mod: dataObj.heightAndWeight.heightMod ? dataObj.heightAndWeight.heightMod : undefined,
                            }
                        }
                        if(dataObj.heightAndWeight.baseWeight || dataObj.heightAndWeight.weightMod){
                            returnObj.weight = {
                                base: dataObj.heightAndWeight.baseWeight ? dataObj.heightAndWeight.baseWeight : undefined,
                                mod: dataObj.heightAndWeight.weightMod ? dataObj.heightAndWeight.weightMod : undefined,
                            }
                        }
                    }
                    break;
                default:
                    if(dataObj[key]){
                        returnObj[key] = dataObj[key];
                    }
                    break;
            }
        })
    }
    if(returnObj && Object.keys(returnObj).length > 0){
        return returnObj;
    }
    return undefined;
}

export const arrayOfDisplaysToKeys = (arrayOfDisplays) => {
    let arrayOfKeys = []
    if(arrayOfDisplays && Array.isArray(arrayOfDisplays) && arrayOfDisplays.length > 0){
        arrayOfDisplays.forEach((display) => {
            arrayOfKeys.push(createKey(display));
        })
    }
    if(arrayOfKeys && arrayOfKeys.length > 0){
        return arrayOfKeys
    }
    return undefined;
}

export const createTraitsInRace = (sourceEntries) => {
    const doNotAdd = [ "Age", "Size", "Speed", "Skills", "Skill Versatility", "Feat", "Languages", "Language", "Extra Language", "Tool Proficiency", "", ]
    let returnArray = [];
    sourceEntries.forEach((sourceEntry) => {
        if(sourceEntry.name && !doNotAdd.includes(sourceEntry.name)){
            returnArray.push(createKey(sourceEntry.name))
        }
    })
    if(returnArray && returnArray.length > 0){
        return returnArray
    }
    return undefined;
}

const createSpellsForRace_helper = (objToCheck, type, ability) => {
    let spells = [];

    if(objToCheck[type]){
        const typeKeys = Object.keys(objToCheck[type]);
        if(typeKeys && typeKeys.length > 0){
            typeKeys.forEach((typeKey) => {
                if(objToCheck[type][typeKey] && Array.isArray(objToCheck[type][typeKey]) && objToCheck[type][typeKey].length > 0){
                    objToCheck[type][typeKey].forEach((spell) => {
                        spells.push({ spell, ability, level: parseInt(typeKey), type })
                    })
                }
                else if (objToCheck[type][typeKey] && typeof objToCheck[type][typeKey] === 'object'){
                    const replenishKeys = Object.keys(objToCheck[type][typeKey]);
                    if(replenishKeys && replenishKeys.length > 0){
                        replenishKeys.forEach((replenishKey) => {
                            if(objToCheck[type][typeKey][replenishKey] && Array.isArray(objToCheck[type][typeKey][replenishKey]) && objToCheck[type][typeKey][replenishKey].length > 0){
                                objToCheck[type][typeKey][replenishKey].forEach((spell) => {
                                    spells.push({ spell, ability, level: parseInt(typeKey), type, replenish: replenishKey })
                                })
                            }
                            
                            else if (objToCheck[type][typeKey][replenishKey] && typeof objToCheck[type][typeKey][replenishKey] === 'object'){
                                const replenishAmountKeys = Object.keys(objToCheck[type][typeKey][replenishKey]);
                                if(replenishAmountKeys && replenishAmountKeys.length > 0){
                                    replenishAmountKeys.forEach((replenishAmountKey) => {
                                        if(objToCheck[type][typeKey][replenishKey][replenishAmountKey] && Array.isArray(objToCheck[type][typeKey][replenishKey][replenishAmountKey]) && objToCheck[type][typeKey][replenishKey][replenishAmountKey].length > 0){
                                            objToCheck[type][typeKey][replenishKey][replenishAmountKey].forEach((spell) => {
                                                spells.push({ spell, ability, level: parseInt(typeKey), type, replenish: replenishKey, replenishAmount: replenishAmountKey })
                                            })
                                        }

                                    });
                                }

                            }

                        });
                    }

                }
            });
        }
    }


    return spells;
}

export const createSpellsForRace = (additionalSpells) => {
    let spells = [];
    
    if(additionalSpells && Array.isArray(additionalSpells) && additionalSpells.length > 0){
        additionalSpells.forEach((additionalSpellsObj) => {
            const types = ["known", "innate"]
            let ability = additionalSpellsObj.ability;
            types.forEach((type) => {
                if (spells && spells.length > 0){
                    spells = [ ...spells, ...createSpellsForRace_helper(additionalSpellsObj, type, ability)]
                } else {
                    spells = [ ...createSpellsForRace_helper(additionalSpellsObj, type, ability)]
                }
            })
        })
    }

    return spells;
}

export const c = (parameter) => {
    let returnValue = parameter;
    
    return returnValue;
}


export const createNotConvertedObj = (fileObj, connectors, checkWorksWith, dataObj) => {
    let returnObj = {...dataObj};
    connectors.forEach((connector) => {
        const { sourceKey, worksWith, } = connector;
        if(checkWorksWith(fileObj, worksWith)){
            if(sourceKey && Array.isArray(sourceKey) && sourceKey.length > 0){
                sourceKey.forEach((key) => {
                    if(key && returnObj[key]){
                        delete returnObj[key];
                    }
                });
            }
            else if(sourceKey && returnObj[sourceKey]){
                delete returnObj[sourceKey];
            }
        }
    });
    if(returnObj && Object.keys(returnObj).length > 0){
        return returnObj;
    }
    return undefined;
}