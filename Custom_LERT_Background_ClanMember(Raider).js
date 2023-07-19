/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found in the Discord group
	Import this file using the "Add Extra Materials" bookmark.

	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*  -INFORMATION-
	Subject:	Background
	Effect:		This script adds a background, called "Clan Member (Raider)"
				This is taken from Grim Hollow: Players Guide (https://5e.tools/backgrounds.html#clan%20member%20(raider)_ghpg)
				This background is made by ????
	Code by:	/u/LERT
	Date:		2023-07-17 (sheet v12.998)
*/

var iFileName = "Clan Member (Raider) [Grim Hollow, transcribed by /u/LERT].js";
RequiredSheetVersion(12.999);

SourceList["GH:PG"] = {
    name : "Clan Member (Raider)",
    abbreviation : "GH:PG",
    group : "Grim Hollow: Player Guide",
    url : "https://5e.tools/backgrounds.html#clan%20member%20(raider)_ghpg",
	date : "2023/07/17"
};

BackgroundList["Clan member (raider)"] = {
	regExpSearch : /^(?=.*Clan)(?=.*member)(?=.*raider).*$/i,
	name : "Clan Member (Raider)",
	source : ["GH:PG", 103],
	skills : ["Intimidation",],
	skillstxt : "Intimidation, choose one from Deception, Insight, Perception, Persuasion, Stealth, or Survival.",
    languageProfs : [1],
	gold : 10,
	equipleft : [
		["Worn Blanket", "", ""],
		["One gaming set of your choice", "", ""],
        ["A sack", "", ""],
        ["Tough leather gloves", "", ""],
	],
	equipright : [
		["Traveler's clothes", "", 4],
		["Belt pouch (with coins)", "", 1]
        ["Mess kit", "", 1],
	],
	feature : "Display of Strength",
	trait : [
		"While you are in a large town or city, you may spend an hour and make a DC 10 Charisma (Intimidation) check.",
		"If you do, your tough demeanor and familiarity with the Fighter's Clan attracts attention from the local members.",
		"You learn the location of any underground prize-fighting rings, Clan friendly businesses, and the names of upper-class arena patrons.",
		"You also learn of any minor jobs being offered to street toughs, such as bodyguard positions or debt collection."
	],
	feature : "Rank 1 - Sheild Bearer",
    trait : [
        "You are a junior warrior, serving as support for more senior members of the raiding party.",
        "Your tasks involve maintaining weapons and armor, tending to wounded warriors, and carrying loot from the raiding site.",
        "Should members of the raiding party be unable to fight, you may be called upon to take their place."
    ],
    toNotesPage : [{
        name : "Rank 1",
        note : "\n  Holdings",
        note : ["Lodging with other warriors.",
                "An ailing mentor and knowledge of a particularly rich target for raiding."
        ],
}],
feature : "Rank 2 - Pillager",
    trait : [
        "As a full member of the raiding party, you are trained to strike hard and fast, then escape with whatever loot you can find.",
        "Common tactics involve sowing confusion by setting fires or releasing livestock, or drawing the attention of the defenders to allow for easier plunder elsewhere.",
        "Your tribe depends on you as a main source of food and supplies, and your comrades depend on you to watch their backs in the chaos of a raid."
    ],
    toNotesPage : [{
        name : "Rank 2",
        note : "\n  Holdings",
        note : ["A younger warrior assigned to maintain your equipment and carry your loot.",
                "Your pick of the goods seized on raids, in order of seniority."
        ],
}],
feature : "Rank 3 - Raid Leader",
    trait : [
        "Through a number of raids you have proven yourself cunning, ruthless, and skilled at combat.",
        "As a raid leader you are tasked with not only gathering as much as you can from your targets, but ensuring that your warriors return alive.",
        "Your underlings look to you for the tactics to use during the raid, and you must reign in the more reckless raiders lest they go too far."
    ],
    toNotesPage : [{
        name : "Rank 3",
        note : "\n  Holdings",
        note : ["A fine dwelling within the village, showcasing trophies from prior raids.",
                "Command over a raiding party and a voice at any war council.",
                "First pick of any goods seized during a raid."
        ],
}],
feature : "Rank 4 - Warlord",
trait : [
    "Your deeds are legendary.",
    "When you speak, chieftains listen, and you direct policy as much as raiding.",
    "More to the point, you are the one who decides where and when to raid and how the military might of the clan will be brought to bear."
],
toNotesPage : [{
    name : "Rank 4",
    note : "\n  Holdings",
    note : ["Authority over at least three raiding parties within your tribe.",
            "Access to war councils and peace negotiations.",
            "The ability to requisition goods and recruit new raiders."
    ],
}],
	variant : [],
	toolProfs : [["Any gaming set", 1]],
	lifestyle : "poor"
};

BackgroundFeatureList["clan member (raider)"] = {
    description : "You have been trained as a warrior with the specific aim of raiding other clans or settlements. Raiding parties must be able to move quickly, strike hard, and carry off enough goods to help support the tribe. The coordination to do all this requires intense training and forges a strong sense of comradery between raiders. Part of this comradery involves a strong sense of competition, each raider vying to perform daring acts or to carry back the best loot. The aftermath of a raid often involves raucous singing, drinking, and revelry, an adrenaline high buoyed by the plentiful food and drink obtained from the raided settlement.",
    source : ["GH:PG", 103]
};
