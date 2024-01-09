addLayer("sharklayer1", {
    name: "DwarfLanternshark", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "D", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "purple",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "Dwarf Lanternsharks", // Name of prestige currency
    baseResource: "Dwarf Lanternshark Cells", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "d", description: "D: Reset for Dwarf Lanternsharks", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    upgrades: {
        11: {
            title: "Blood",
            description: "Attracts 15% more Dwarf Lanternshark Cells!",
            cost: new Decimal(1)
        },
        12: {
            title: "Better Blood",
            description: "Attracts 20% more Dwarf Lanternshark Cells!",
            cost: new Decimal(3),
            unlocked() {
                return hasUpgrade(this.layer, 11)
            }
        },
        13: {
            title: "Bestest Blood",
            description: "Attracts 25% more Dwarf Lanternshark Cells!",
            cost: new Decimal(5),
            unlocked() {
                return hasUpgrade(this.layer, 12)
            }
        },
        14: {
            title: "Secret Formula Blood",
            description: "Attracts 75% more Dwarf Lanternshark Cells!",
            cost: new Decimal(15),
            unlocked() {
                return hasUpgrade(this.layer, 13) && hasUpgrade(this.layer, 21)
            }
        },
        21: {
            title: "Self Awareness",
            description: "Gives you more Dwarf Lanternshark Cells based on the amount of Dwarf Lanternsharks you have!",
            cost: new Decimal(10),
            unlocked() {
                return hasUpgrade(this.layer, 13)
            },
            effect() {
                return player[this.layer].points.add(1).pow(0.3)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        22: {
            title: "Self Synergy",
            description: "Gives you more Dwarf Lanternshark Cells Based on the amount of Dwarf Lanternshark Cells you have",
            cost: new Decimal(20),
            unlocked() {
                return hasUpgrade(this.layer, 21)
            },
            effect() {
                return player.points.add(1).pow(0.085)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        }
    }
})


