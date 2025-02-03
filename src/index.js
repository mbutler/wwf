import { maneuvers } from "./maneuvers.js"

export function findMoves(attackerPosition, defenderPosition, params = {}) {
  return maneuvers
    .filter(move => move[attackerPosition]?.includes(defenderPosition))
    .filter(move => Object.entries(params).every(([key, value]) => move[key] === value))
}

/**
 * Returns a maneuver whose Name exactly matches the provided name.
 */
export function getManeuverByName(name) {
  return maneuvers.find(move => move.Name === name)
}

/**
 * Groups maneuvers by any given key.
 * For example, you can group by "Level", "Type", or "Attribute".
 */
export function groupManeuversBy(key) {
  return maneuvers.reduce((grouped, move) => {
    const groupKey = move[key]
    if (!grouped[groupKey]) {
      grouped[groupKey] = []
    }
    grouped[groupKey].push(move)
    return grouped
  }, {})
}

/**
 * Returns an array of unique values for a given key from the maneuvers.
 * Useful for populating filter options (e.g., all unique types or attributes).
 */
export function getUniqueValues(key) {
  const values = maneuvers.map(move => move[key])
  return [...new Set(values)]
}

/**
 * Searches maneuvers by a keyword in their description.
 * The search is case-insensitive.
 */
export function searchByDescription(keyword) {
  return maneuvers.filter(move =>
    move.Description?.toLowerCase().includes(keyword.toLowerCase())
  )
}

/**
 * Sorts maneuvers by a given key.
 * Optionally, you can provide a custom comparator.
 * Default order is ascending; pass "desc" for descending.
 */
export function sortManeuversBy(key, order = "asc", comparator) {
  const movesCopy = [...maneuvers]
  if (comparator && typeof comparator === "function") {
    movesCopy.sort(comparator)
  } else {
    movesCopy.sort((a, b) => {
      if (a[key] < b[key]) return order === "asc" ? -1 : 1
      if (a[key] > b[key]) return order === "asc" ? 1 : -1
      return 0
    })
  }
  return movesCopy
}

/**
 * Returns a random maneuver from the list.
 * This could be useful for random encounters or effects.
 */
export function getRandomManeuver() {
  const index = Math.floor(Math.random() * maneuvers.length)
  return maneuvers[index]
}

/**
 * Filters maneuvers by a maximum Weight Mod value.
 * Use this if you need to only consider moves below a certain weight modifier.
 */
export function filterByWeightMod(maxWeightMod) {
  return maneuvers.filter(move => move["Weight Mod"] <= maxWeightMod)
}

/**
 * Returns a formatted string summary of a maneuver.
 * This can be used for UI elements or logging.
 */
export function formatManeuver(move) {
  return `${move.Name} (Level: ${move.Level}, Type: ${move.Type}) - ${move.Description}`
}

// 1. findMoves: Find striking moves when the attacker is standing and the defender is kneeling
const strikingMovesStanding = findMoves('Standing', 'K', { Type: 'Striking', Legal: true })
console.log('Striking moves (standing attacker, kneeling defender):', strikingMovesStanding)

// 3. getManeuverByName: Retrieve a maneuver by its exact name
const specificMove = getManeuverByName('Double Axhandle')
//console.log('Found maneuver:', specificMove)

// 4. groupManeuversBy: Group maneuvers by their Type (e.g. "Striking", "Grappling", etc.)
const maneuversByType = groupManeuversBy('Type')
//console.log('Maneuvers grouped by type:', maneuversByType)

// 5. getUniqueValues: Get all unique Levels available among the maneuvers
const uniqueLevels = getUniqueValues('Level')
//console.log('Unique maneuver levels:', uniqueLevels)

// 6. searchByDescription: Find maneuvers that mention a keyword in their description (case-insensitive)
// For example, searching for "clenched" might find moves where a wrestler uses a clenched fist.
const clenchedMoves = searchByDescription('clenched')
//console.log('Maneuvers with "clenched" in description:', clenchedMoves)

// 7. sortManeuversBy: Sort maneuvers by Level in descending order
const sortedByLevelDesc = sortManeuversBy('Level', 'desc')
//console.log('Maneuvers sorted by level (desc):', sortedByLevelDesc)

// 8. getRandomManeuver: Retrieve a random maneuver (useful for random encounters)
const randomMove = getRandomManeuver()
//console.log('Random maneuver:', randomMove)

// 9. filterByWeightMod: Get maneuvers with a Weight Mod less than or equal to 15
const lightManeuvers = filterByWeightMod(15)
//console.log('Maneuvers with Weight Mod <= 15:', lightManeuvers)

// 10. formatManeuver: Get a nicely formatted string summary of a maneuver
const formattedMove = formatManeuver(specificMove)
//console.log('Formatted maneuver summary:', formattedMove)
