import { maneuvers } from "./maneuvers.js"
import * as _ from "lodash"

export function findMoves(attackerPosition, defenderPosition, params) {
    let result = []
    _.forEach(maneuvers, (move) => {
        if (_.includes(move[attackerPosition], defenderPosition)) {
            result.push(move)
        }
    })
    if (params) {
        result = _.filter(result, params)
    }

    return result
}

export function isLegal(move) {
    let legal = true
    if (move.Legal === "N") {
        legal = false
    }
    return legal
}
