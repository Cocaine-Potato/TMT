let modInfo = {
	name: "The Shark Tree",
	id: "cpmods.the_shark_tree",
	author: "Cocaine_Potato",
	pointsName: "Dwarf Lanternshark Cells",
	modFiles: ["layers.js", "tree.js"],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (1), // Used for hard resets and new players
	offlineLimit: 24,  // In hours
}

//
// https://www.discoveryuk.com/sharks/shark-size-comparison-quick-fire-guide/
//

// Set your version in num and name
let VERSION = {
	num: "0.1",
	name: "The Breakup",
}

let changelog = `<h1>Changelog:</h1>

	
	<br><br><br><h3>v0.1 - The Breakup</h3><br>
		this game is no longer "The Cat Tree", which i intended to code for my now ex-girlfriend, but now for Jake, a great friend of mine
		
	<br><br><br><h3>v0.0 - The Birthing</h3><br>
		its literally just the birthing`
		

let winText = `Congratulations! You have reached the end and beaten this game, but for now...`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)

	let gain = new Decimal(1)
	///////////////////////////////////
	/// sharklayer1
	///////////////////////////////////

	// sharklayer1 + + + Row 1 //
	
	if (hasUpgrade("sharklayer1", 11)) gain = gain.times(1.15)
	if (hasUpgrade("sharklayer1", 12)) gain = gain.times(1.2)
	if (hasUpgrade("sharklayer1", 13)) gain = gain.times(1.25)
	if (hasUpgrade("sharklayer1", 14)) gain = gain.times(1.75)
	

	// sharklayer1 + + + Row 2 //

	if (hasUpgrade("sharklayer1", 21)) gain = gain.times(upgradeEffect("sharklayer1", 21))
	if (hasUpgrade("sharklayer1", 22)) gain = gain.times(upgradeEffect("sharklayer1", 22))


	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
]

// Determines when the game "ends"
function isEndgame() {
	return player.points.gte(new Decimal("e280000000"))
}



// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}