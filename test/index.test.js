import { expect } from "chai"
import { findMoves } from "../src/index.js"

describe("Finding", () => {
    it("returns compatible moves given attacker and defender starting position plus optional filter params", () => {
        expect(findMoves("Standing", "F")).to.have.lengthOf(9)
        expect(findMoves("Standing", "F", { Level: 1 })).to.have.lengthOf(7)
    })
})
