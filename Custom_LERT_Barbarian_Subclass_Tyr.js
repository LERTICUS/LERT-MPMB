/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Subclass
	Effect:		This script adds a subclass for the Barbarian, called "Path of Týr"
				This is taken from World Anvil (https://www.worldanvil.com/w/goldoa-butterflyjoe/a/path-of-tyr-7C-barbarian-7C-article)
				This subclass is made by Monkey DM
	Code by:	u/LERT
	Date:		2023-7-11
*/

var iFileName = "Barbarian - Path of Týr [by Monkey DM].js";
RequiredSheetVersion(13);

// Define the source
SourceList["NLC:PoT"] = {
	name : "NLC:Path of Týr",
	abbreviation : "NLC:PoT",
	group : "NLC",
	url : "https://www.worldanvil.com/w/goldoa-butterflyjoe/a/path-of-tyr-7C-barbarian-7C-article",
	date : "2023/7/17"
};

AddSubClass("barbarian", "path of týr", {
	regExpSearch : /^(((?=.*(Tyr|Law|Sacrifice))((?=.*barbarian)|((?=.*(divine|defence|tank|dps))(?=.*(knight|fighter|warrior|warlord|tank)))))|((?=.*(sea|pirate|swashbuckler))(?=.*(knight|fighter|warrior|warlord|trooper)))).*$/i,
	subname : "Path of Tyr",
	source : ["NLC:PoT", 1],
	features : {
		"subclassfeature3" : {
			name : "Eye For An Eye",
			source : ["NLC:PoT", 1],
			minlevel : 3,
			description : desc([
				"Starting at level 3, You can choose to take more pain to inflict more pain",
				"While raging, when an enemy damages you with melee attack that deals piercing, slashing or bludgeoning damage, you can choose to let the damage bypass your resistance",
				"If you do so, you can, in retaliation, use your reaction to make a single melee weapon attack against them",
			]),
			action : ["reaction", ""]
		},
		"subclassfeature3.1" : {
			name : "Restriction:Ritual Sacrifice",
			source : ["NLC:PoT", 1],
			minlevel : 3,
			description : desc([
				"All that take the path of Tyr, sacrifice their hand to prove that they will always keep a promise like their god and will pursue justice and law, even at the cost of their lives",
				"In exchange, they can wield 2 handed weapons with one hand, losing the benefit if they regrow the limb or another hand"
			]),
			action : ["restriction", ""]
		},
		"subclassfeature6" : {
			name : "Embodiment Of Law",
			source : ["NLC:PoT", 1],
			minlevel : 6,
			description : desc([
				"At level 6, You become proficient in Insight if you are not already",
				"In addition you have advantage on Insight checks, and can use Insight (Constitution) checks instead of Insight (Wisdom) checks for them, using your body as your guide"
			]),
			skills : ["Insight"],
            addMod : { type : "skill", field : "Insight", mod : "Con-Wis", text : "I can use Constitution instead of Wisdom for my Insight checks." },
		},
		"subclassfeature10" : {
			name : "Embodiment of Justice",
			source : ["NLC:PoT", 1],
			minlevel : 10,
			description : desc([
				"At level 10, while raging, you can force justice to shine through.",
				"You can cast the compelled duel spell at will, your rage doesn't prevent the casting or the concentration on this spell."]),
                SpellcastingBonus: [{
                name : "Name of the feature as you want it to appear in the spell selection dialog",
                spells : ["compelled duel"],
                selection : ["compelled duel"],
                firstCol : "atwill"
                }],
		},
		"subclassfeature14" : {
			name : "Embodiment of War",
			source : ["NLC:PoT", 1],
			minlevel : 14,
			description : desc([
				"At level 14, you are shattering the battlefield",
                "While raging, w once per turn, when you miss with a melee weapon attack, you can reroll the attack roll"
			]),
			recovery : "turn",
			usages : 1,
			action : ["action", ""]
		}
	}
});
