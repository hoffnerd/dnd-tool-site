export default {
    race: [
        {
            key: "dragonborn",
            subraces:[
                {
                    key: "options",
                    display: "Subrace (Draconic Ancestry)",
                    description: "You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry table. Your breath weapon and damage resistance are determined by the dragon type, as shown in the selector.",
                    additionalKeys: [ "damageType", "description" ]
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
                { key: "white", display: "White", damageType: "Cold", description: "15 ft. cone (Con. save)" }
            ]
        }
    ]
}