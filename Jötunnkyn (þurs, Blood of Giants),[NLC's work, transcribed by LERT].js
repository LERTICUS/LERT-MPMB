/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.

	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Race & Feats
	Effect:		This script adds a player race, Jotunnkyn.
				This race is made by NLC
	Code by:	LERT
	Date:		2023/07/17

	Please support the creator of this content (NLC) and download his material.
*/

var iFileName = "Jötunnkyn_(þurs_Blood_of_Giants),[NLC's_work,_transcribed_by_LERT].js";
RequiredSheetVersion(13);

SourceList["NLC:J(PBoG)"] = {
	name : "NLC: Jötunnkyn (þurs, Blood of Giants)",
	abbreviation : "NLC:J(PBoG))",
	group : "NLC",
	url : "https://www.worldanvil.com/w/therinyn-sanguinestories/a/jotunnkyn-document",
	date : "2023/07/18"
};

RaceList["Jötunnkyn (þurs)"] = {
	regExpSearch : /Jotunnkyn/i,
	name : "Jötunnkyn",
	source : ["NLC", 10],
	plural : "Jötunnkyn",
	size : 3,
	speed : {
		walk : { spd : 35, enc : 20 },
	},
	languageProfs : ["Common, Primordial"],
	vision : [["Darkvision", 60]],
	age : " Jötunnkyn reach adulthood at age 14 and live up to 160 years. But many die younger due to the harsh environment.",
	height : " Your size is Medium. To set your height and weight randomly, start with rolling a size modifier: Size modifier = 3d8 Height = 6 feet + your size modifier in inches",
	weight : " Your size is Medium. To set your height and weight randomly, start with rolling a size modifier: Weight in pounds = 250 + (2d6 x your size modifier)",
	savetxt : { immune : ["cold"] },
    skills: ["Survival"],
	scorestxt : "+2 Strength, and +2 Constitution",
	scores : [2, 0, 2, 0, 0, 0],
	trait : "þurs, Blood of Giants (+2 Constitution, and +2 Strength)\nThick Skin: I'm immune to cold, and disadvantages imposed by cold climate.\nImposing Build: You count as one size larger when determining your carrying capacity, for the creatures you can grapple and the weight you can push, drag, or lift.\nGiant's Might: Awakening your blood, you can cast the Enlarge/Reduce spell on yourself once per long rest, using only the spell's enlarge option.",	
	features : {
        "giant's might" : {
			name : "Giant's Might",
			minlevel : 1,
			action : ["action", ""], 
			spellcastingBonus : { 
				name : "Giant's Might",
				spells : ["enlarge/reduce"],
				selection : ["enlarge/reduce"],
				oncelr : true,
			},
		},
	}};