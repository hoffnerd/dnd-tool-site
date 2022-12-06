export default [
    {
        key: "abilityScoreIncrease",
        display: "Ability Score Increase",
        description: "Your {ability} score increases by {number}.",
        requirements: [ "ability", "number" ],
    },
    {
        key: "variantAbilityScoreIncrease",
        display: "Ability Score Increase",
        description: "Two different ability scores of your choice increase by 1.",
    },
    {
        key: "chooseAbilityScoreIncrease",
        display: "Choose an Ability Score to Increase",
        description: "Choose an ability score to increase by {number}",
        requirements: [ "number" ],
    },
    {
        key: "chooseSkill",
        display: "Choose a Skill",
        description: "You gain proficiency in one skill of your choice.",
    },
    {
        key: "skillVersatility",
        display: "Skill Versatility",
        description: "You gain proficiency in two skills of your choice.",
    },
    {
        key: "chooseFeat",
        display: "Choose a Feat",
        description: "You gain one feat of your choice.",
    },
    {
        key: "chooseLanguage",
        display: "Choose a Language",
        description: "People typically learn the languages of other peoples they deal with, including obscure dialects. Some people are fond of sprinkling their speech with words borrowed from other tongues: Orc curses, Elvish musical expressions, Dwarvish military phrases, and so on.",
    },
    {
        key: "extraLanguage",
        display: "Extra Language",
        description: "You can speak, read, and write one extra language of your choice",
    },
    {
        key: "speedNotReducedHeavyArmor",
        display: "Speed not reduced by Heavy Armor",
        description: "Your speed is not reduced by wearing heavy armor.",
    },
    {
        key: "darkvision",
        display: "Darkvision",
        description: "You can see in dim light within 60 feet of yourself as if it were bright light and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.",
    },
    {
        key: "superiorDarkvision",
        display: "Superior Darkvision",
        description: "Your darkvision has a radius of 120 feet",
    },
    {
        key: "dwarvenResilience",
        display: "Dwarven Resilience",
        description: "You have advantage on saving throws against poison, and you have resistance against poison damage",
    },
    {
        key: "dwarvenCombatTraining",
        display: "Dwarven Combat Training",
        description: "You have proficiency with the battleaxe, handaxe, light hammer, and warhammer.",
        rules: [ { key: "proficientWeapon", with: [ "battleaxe", "handaxe", "lightHammer", "warhammer" ] } ]
    },
    {
        key: "toolProficiency",
        display: "Tool Proficiency",
        description: "You gain proficiency with the artisan's tools of your choice: ",
        requirements: [ "with" ],
        rules: [ { key: "proficientChoice" } ]
    },
    {
        key: "stonecunning",
        display: "Stonecunning",
        description: "Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.",
    },
    {
        key: "dwarvenToughness",
        display: "Dwarven Toughness",
        description: "Your hit point maximum increases by 1, and it increases by 1 every time you gain a level.",
    },
    {
        key: "dwarvenArmorTraining",
        display: "Dwarven Armor Training",
        description: "You have proficiency with light and medium armor.",
        rules: [ { key: "proficientArmor", with: [ "light", "medium" ] } ]
    },
    {
        key: "keenSenses",
        display: "Keen Senses",
        description: "You have proficiency in the Perception Skill",
        rules: [ { key: "proficientSkill", with: [ "perception" ] } ]
    },
    {
        key: "feyAncestry",
        display: "Fey Ancestry",
        description: "You have advantage on saving throws against being charmed, and magic can't put you to sleep.",
    },
    {
        key: "trance",
        display: "Trance",
        description: `Elves don't need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is "trance.") While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep.`,
    },
    {
        key: "elfWeaponTraining",
        display: "Elf Weapon Training",
        description: "You have proficiency with the longsword, shortsword, shortbow, and longbow.",
        rules: [ { key: "proficientWeapon", with: [ "longsword", "shortsword", "shortbow", "longbow" ] } ]
    },
    {
        key: "cantrip",
        display: "Cantrip",
        description: "You know one cantrip of your choice from the wizard spell list. {ability} is your spellcasting ability for it.",
        requirements: [ "ability" ],
        rules: [ { key: "cantrip" } ]
    },
    {
        key: "naturalIllusionist",
        display: "Natural Illusionist",
        description: "You know the minor illusion cantrip. Intelligence is spellcasting ability for it.",
        rules: [ { key: "cantrip", cantrip:"minorIllusion" } ]
    },
    {
        key: "sunlightSensitivity",
        display: "Sunlight Sensitivity",
        description: "You have disadvantage on attack rolls and Wisdom (Perception) checks that rely on sight when you, the target of the attack, or whatever you are trying to perceive is in direct sunlight.",
    },
    {
        key: "drowMagic",
        display: "Drow Magic",
        description: "You know the Dancing Lights cantrip. When you reach 3rd level, you can cast the Faerie Fire spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the Darkness spell onceand regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.",
    },
    {
        key: "drowWeaponTraining",
        display: "Drow Weapon Training",
        description: "You have proficiency with rapiers, shortswords, and hand crossbows.",
        rules: [ { key: "proficientWeapon", with: [ "rapier", "shortsword", "handCrossbow" ] } ]
    },
    {
        key: "lucky",
        display: "Lucky",
        description: "When you roll a 1 on the d20 for an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll.",
    },
    {
        key: "brave",
        display: "Brave",
        description: "You have advantage on saving throws against being frightened.",
    },
    {
        key: "halflingNimbleness",
        display: "Halfling Nimbleness",
        description: "You can move through the space of any creature that is of a size larger than yours.",
    },
    {
        key: "naturallyStealthy",
        display: "Naturally Stealthy",
        description: "You can attempt to hide even when you are obscured only by a creature that is at least one size larger than you.",
    },
    {
        key: "stoutResilience",
        display: "Stout Resilience",
        description: "You have advantage on saving throws against poison, and you have resistance against poison damage.",
    },
    {
        key: "breathWeapon",
        display: "Breath Weapon",
        description: "You can use your action to exhale destructive energy. Your draconic ancestry determines the size, shape, and damage type of the exhalation. When you use your breath weapon, each creature in the area of the exhalation must make a saving throw, the type of which is determined by your draconic ancestry. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increases to 3d6 at 6th level, 4d6 at 11th level, and 5d6 at 16th level. After you use your breath weapon, you can't use it again until you complete a short or long rest.",
    },
    {
        key: "damageResistance",
        display: "Damage Resistance",
        description: "You have resistance to the damage type associated with your draconic ancestry.",
    },
    {
        key: "gnomeCunning",
        display: "Gnome Cunning",
        description: "You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic.",
    },
    {
        key: "speakSmallBeasts",
        display: "Speak with Small Beasts",
        description: "Through sounds and gestures, you can communicate simple ideas with Small or smaller beasts. Forest gnomes love animals and often keep squirrels, badgers, rabbits, moles, woodpeckers, and other creatures as beloved pets.",
    },
    {
        key: "artificersLore",
        display: "Artificer's Lore",
        description: "Whenever you make an Intelligence (History) check related to magic items, alchemical objects, or technological devices, you can add twice your proficiency bonus, instead of any proficiency bonus you normally apply.",
    },
    {
        key: "tinker",
        display: "Tinker",
        description: "You have proficiency with artisan's tools (tinker's tools). Using those tools, you can spend 1 hour and 10 gp worth of materials to construct a Tiny clockwork device (AC 5, 1 hp). The device ceases to function after 24 hours (unless you spend 1 hour repairing it to keep the device functioning), or when you use your action to dismantle it; at that time, you can reclaim the materials used to create it. You can have up to three such devices active at a time. When you create a device, choose one of the following options:",
        rules: [ { key: "tinkerChoice", choices: [
            "Clockwork Toy - This toy is a clockwork animal, monster, or person, such as a frog, mouse, bird, dragon, or soldier. When placed on the ground, the toy moves 5 feet across the ground on each of your turns in a random direction. It makes noises as appropriate to the creature it represents.",
            "Fire Starter - The device produces a miniature flame, which you can use to light a candle, torch, or campfire. Using the device requires your action.",
            "Music Box - When opened, this music box plays a single song at a moderate volume. The box stops playing when it reaches the song's end or when it is closed.",
        ] } ]
    },
    {
        key: "menacing",
        display: "Menacing",
        description: "You gain proficiency in the Intimidation skill.",
    },
    {
        key: "relentlessEndurance",
        display: "Relentless Endurance",
        description: "When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can't use this feature again until you finish a long rest.",
    },
    {
        key: "savageAttacks",
        display: "Savage Attacks",
        description: "When you score a critical hit with a melee weapon attack, you can roll one of the weapon's damage dice one additional time and add it to the extra damage of the critical hit.",
    },
    {
        key: "hellishResistance",
        display: "Hellish Resistance",
        description: "You have resistance to fire damage.",
    },
    {
        key: "infernalLegacy",
        display: "Infernal Legacy",
        description: "You know the thaumaturgy cantrip. When you reach 3rd level, you can cast the hellish rebuke spell as a 2nd-level spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the darkness spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.",
    },
    
    // {
    //     key: "",
    //     display: "",
    //     description: "",
    //     requirements: [ "" ],
    //     rules:[ "requirements" ]
    // },
];