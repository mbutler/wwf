import { expect } from "chai"
import { isLength } from "lodash"
import { findMoves, isLegal } from "../src/index.js"

const sample = {
    Name: "Lunge Punch",
    Level: 2,
    Attribute: "Martial Arts",
    Standing: "SR",
    Kneeling: "",
    Prone: "",
    Flying: "",
    Running: "",
    "Stun Points": "2, power, run",
    Legal: "N",
    "Weight Mod": "",
    Type: "Striking",
    "Your Position After": "Standing",
    "Opponent Position After": "Next Lower Position",
    Description:
        "The attacking wrestler leaps forward, pushing off with his feet and hits his opponent in the abdomen and ribs with a clenched fist.",
}

describe("Finding", () => {
    it("returns compatible moves given attacker and defender starting position plus optional filter params", () => {
        expect(findMoves("Standing", "F")).to.have.lengthOf(9)
        expect(findMoves("Standing", "F", { Level: 1 })).to.have.lengthOf(7)
    })
})

describe("Legality", () => {
    it("checks if a maneuver is legal", () => {
        expect(isLegal(sample)).to.eql(false)
    })
})
