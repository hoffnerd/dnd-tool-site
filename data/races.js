export default [
    {
        key: "dwarf",
        display: "Dwarf",
        shortDescription: "",
        description: "",
        speed: 25,
        size: "medium",
        traits: [
            { key: "abilityScoreIncrease", ability: "constitution", number: 2 },
            { key: "speedNotReducedHeavyArmor" },
            { key: "darkvision" },
            { key: "dwarvenResilience" },
            { key: "dwarvenCombatTraining" },
            { key: "toolProficiency", with: [ "Smith's Tools", "Brewers Supplies", "Masons Tools" ] },
            { key: "stonecunning" },
        ],
        languages:[ "common", "dwarvish" ],
        subraces:[
            {
                key: "hillDwarf",
                display: "Hill Dwarf",
                description: "",
                traits: [
                    { key: "abilityScoreIncrease", ability: "wisdom", number: 1 },
                    { key: "dwarvenResilience" },
                ]
            },
            {
                key: "mountainDwarf",
                display: "Mountain Dwarf",
                description: "",
                traits: [
                    { key: "abilityScoreIncrease", ability: "strength", number: 2 },
                    { key: "dwarvenArmorTraining" },
                ]
            }
        ],
        source: "playersHandbook"
    },
    {
        key: "elf",
        display: "Elf",
        shortDescription: "",
        description: "",
        speed: 30,
        size: "medium",
        traits: [
            { key: "abilityScoreIncrease", ability: "dexterity", number: 2 },
            { key: "darkvision" },
            { key: "keenSenses" },
            { key: "feyAncestry" },
            { key: "trance" },
        ],
        languages:[ "common", "elvish" ],
        subraces:[
            {
                key: "highElf",
                display: "High Elf",
                description: [
                    "As a high elf, you have a keen mind and a mastery of at least the basics of magic. In many of the worlds of D&D, there are two kinds of high elves. One type (which includes the gray elves and valley elves of Greyhawk, the Silvanesti of Dragonlance, and the sun elves of the Forgotten Realms) is haughty and reclusive, believing themselves to be superior to non-elves and even other elves. The other type (including the high elves of Greyhawk, the Qualinesti of Dragonlance, and the moon elves of the Forgotten Realms) are more common and more friendly, and often encountered among humans and other races.",
                    "The sun elves of Faerûn (also called gold elves or sunrise elves) have bronze skin and hair of copper, black, or golden blond. Their eyes are golden, silver, or black. Moon elves (also called silver elves or gray elves) are much paler, with alabaster skin sometimes tinged with blue. They often have hair of silver-white, black, or blue, but various shades of blond, brown, and red are not uncommon. Their eyes are blue or green and flecked with gold." 
                ],
                traits: [
                    { key: "abilityScoreIncrease", ability: "intelligence", number: 1 },
                    { key: "elfWeaponTraining" },
                    { key: "cantrip", ability: "intelligence", },
                    { key: "extraLanguage" },
                ]
            },
            {
                key: "darkElf",
                display: "Dark Elf",
                description: "Descended from an earlier subrace of dark-skinned elves, the drow were banished from the surface world for following the goddess Lolth down the path to evil and corruption. Now they have built their own civilization in the depths of the Underdark, patterned after the Way of Lolth. Also called dark elves. The drow have black skin that resembles polished obsidian and stark white or pale yellow hair. They commonly have very pale eyes (so pale as to be mistaken for while) in shades of lilac, silver, pink, red, and blue. They lend to be smaller and thinner than most elves.",
                traits: [
                    { key: "abilityScoreIncrease", ability: "charisma", number: 1 },
                    { key: "superiorDarkvision" },
                    { key: "sunlightSensitivity" },
                    { key: "drowMagic" },
                    { key: "drowWeaponTraining" },
                ]
            },
        ],
        source: "playersHandbook"
    },
    {
        key: "halfling",
        display: "Halfling",
        shortDescription: "",
        description: "",
        speed: 25,
        size: "small",
        traits: [
            { key: "abilityScoreIncrease", ability: "dexterity", number: 2 },
            { key: "lucky" },
            { key: "brave" },
            { key: "halflingNimbleness" },
        ],
        languages:[ "common", "halfling" ],
        subraces:[
            {
                key: "lightfootHalfling",
                display: "Lightfoot Halfling",
                description: [
                    "As a lightfoot halfling, you can easily hide from notice, even using other people as cover. You're inclined to be affable and get along well with others. In the Forgotten Realms, lightfoot halflings have spread the farthest and thus are the most common variety.",
                    "Lightfoots are more prone to wanderlust than other halflings, and often dwell alongside other races or take up a nomadic life. In the world of Greyhawk, these halflings are called hairfeet or tallfellows."
                ],
                traits: [
                    { key: "abilityScoreIncrease", ability: "charisma", number: 1 },
                    { key: "naturallyStealthy" },
                ]
            },
            {
                key: "stoutHalfling",
                display: "Stout Halfling",
                description: "As a stout halfling, you're hardier than average and have some resistance to poison. Some say that stouts have dwarven blood. In the Forgotten Realms, these halflings are called stronghearts, and they're most common in the south.",
                traits: [
                    { key: "abilityScoreIncrease", ability: "constitution", number: 1 },
                    { key: "stoutResilience" },
                ]
            },
        ],
        source: "playersHandbook"
    },
    {
        key: "human",
        display: "Human",
        shortDescription: "",
        description: "",
        speed: 30,
        size: "medium",
        traits: [
            { key: "abilityScoreIncrease", ability: "ability", number: 1 },
            { key: "chooseLanguage" },
        ],
        languages:[ "common" ],
        subraces:[
            {
                key: "options",
                optional: true,
                replace: [ "abilityScoreIncrease" ]
            },
            {
                key: "variantHuman",
                display: "Variant Human",
                description: "If your campaign uses the optional feat rules from the Player's Handbook, your Dungeon Master might allow these variant traits, all of which replace the human's Ability Score Increase trait.",
                traits: [
                    { key: "variantAbilityScoreIncrease" },
                    { key: "chooseSkill" },
                    { key: "chooseFeat" },
                ]
            },
        ],
        source: "playersHandbook"
    },
    {
        key: "dragonborn",
        display: "Dragonborn",
        shortDescription: "",
        description: "",
        speed: 30,
        size: "medium",
        traits: [
            { key: "abilityScoreIncrease", ability: "strength", number: 2 },
            { key: "abilityScoreIncrease", ability: "charisma", number: 1 },
            { key: "breathWeapon" },
            { key: "damageResistance" },
        ],
        languages:[ "common", ],
        subraces:[
            {
                key: "options",
                display: "Subrace (Draconic Ancestry)",
                description: "You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry table. Your breath weapon and damage resistance are determined by the dragon type, as shown in the selector.",
            },
            { key: "black", display: "Black", damageType: "Acid", description: "5 by 30 ft. line (Dex. save)" },
            { key: "blue", display: "Blue", damageType: "Lightning", description: "5 by 30 ft. line (Dex. save)" },
            { key: "brass", display: "Brass", damageType: "Fire", description: "5 by 30 ft. line (Dex. save)" },
            { key: "bronze", display: "Bronze", damageType: "Lightning", description: "5 by 30 ft. line (Dex. save)" },
            { key: "copper", display: "Copper", damageType: "Acid", description: "5 by 30 ft. line (Dex. save)" },
            { key: "gold", display: "Gold", damageType: "Fire", description: "15 ft. cone (Con. save)" },
            { key: "green", display: "Green", damageType: "Poison", description: "15 ft. cone (Con. save)" },
            { key: "red", display: "Red", damageType: "Fire", description: "15 ft. cone (Con. save)" },
            { key: "silver", display: "Silver", damageType: "Cold", description: "15 ft. cone (Con. save)" },
            { key: "white", display: "White", damageType: "Cold", description: "15 ft. cone (Con. save)" },
        ],
        source: "playersHandbook"
    },
    {
        key: "gnome",
        display: "Gnome",
        shortDescription: "",
        description: "",
        speed: 25,
        size: "small",
        traits: [
            { key: "abilityScoreIncrease", ability: "intelligence", number: 1 },
            { key: "darkvision" },
            { key: "gnomeCunning" },
        ],
        languages:[ "common", "gnomish" ],
        subraces:[
            {
                key: "forestGnome",
                display: "Forest Gnome",
                description: "",
                traits: [
                    { key: "abilityScoreIncrease", ability: "dexterity", number: 1 },
                    { key: "naturalIllusionist" },
                    { key: "speakSmallBeasts" },
                ]
            },
            {
                key: "rockGnome",
                display: "Rock Gnome",
                description: "As a rock gnome, you have a natural inventiveness and hardiness beyond that of other gnomes. Most gnomes in the worlds of D&D are rock gnomes, including the tinker gnomes of the Dragonlance setting.",
                traits: [
                    { key: "abilityScoreIncrease", ability: "constitution", number: 1 },
                    { key: "artificersLore" },
                    { key: "tinker" },
                ]
            },
        ],
        source: "playersHandbook"
    },
    {
        key: "halfElf",
        display: "Half Elf",
        shortDescription: "",
        description: "",
        speed: 30,
        size: "medium",
        traits: [
            { key: "abilityScoreIncrease", ability: "charisma", number: 2 },
            { key: "chooseAbilityScoreIncrease", number: 1 },
            { key: "darkvision" },
            { key: "feyAncestry" },
            { key: "extraLanguage" },
        ],
        languages:[ "common", "elvish" ],
        source: "playersHandbook"
    },
    {
        key: "halfOrc",
        display: "Half Orc",
        shortDescription: "",
        description: "",
        speed: 30,
        size: "medium",
        traits: [
            { key: "abilityScoreIncrease", ability: "strength", number: 2 },
            { key: "abilityScoreIncrease", ability: "constitution", number: 1 },
            { key: "darkvision" },
            { key: "menacing" },
            { key: "relentlessEndurance" },
            { key: "savageAttacks" },
            { key: "relentlessEndurance" },
        ], 
        languages:[ "common", "orc" ],
        source: "playersHandbook"
    },
    {
        key: "tiefling",
        display: "tiefling",
        shortDescription: "",
        description: "",
        speed: 30,
        size: "medium",
        traits: [
            { key: "abilityScoreIncrease", ability: "charisma", number: 2 },
            { key: "abilityScoreIncrease", ability: "intelligence", number: 1 },
            { key: "darkvision" },
            { key: "hellishResistance" },
            { key: "infernalLegacy" },
        ],
        languages:[ "common", "infernal" ],
        source: "playersHandbook"
    },
    // {
    //     key: "",
    //     display: "",
    //     shortDescription: "",
    //     description: "",
    //     speed: 30,
    //     size: "medium",
    //     traits: [
    //         { key: "" },
    //     ],
    //     languages:[ "common", ],
    //     subraces:[
    //         {
    //             key: "",
    //             display: "",
    //             description: "",
    //             traits: [
    //                 { key: "" },
    //             ]
    //         },
    //     ],
    //     source: "playersHandbook"
    // },
];