const movementChart = {
  "MOR": [0, 3, 5, 7, 20, 20, 10, 6, 21, 12],
  "Ring Corner": [3, 5, 2, 4, 17, 18, 4, 5, 19, 9],
  "Apron": [5, 2, 0, 2, 15, 15, 5, 3, 16, 7],
  "Ringside": [7, 4, 2, 0, 13, 12, 4, 3, 13, 5],
  "Locker Room": [20, 17, 15, 13, 0, 6, 6, 14, 7, 8],
  "Interview Area": [20, 18, 15, 12, 6, 0, 7, 16, 9, 8],
  "Crowd": [10, 4, 5, 4, 6, 6, 0, 4, 8, 4],
  "Floor Corner": [6, 5, 3, 3, 14, 16, 4, 9, 17, 6],
  "Special Interview": [21, 19, 16, 13, 7, 9, 8, 17, 0, 4],
  "Runway": [12, 9, 7, 5, 8, 8, 4, 6, 4, 0]
}

/**
 * Returns the movement points between two points.
 * @param {string} from - Starting location name (e.g., "MOR").
 * @param {string} to - Destination location name (e.g., "Ring Corner").
 * @returns {number|null} Movement points or null if locations are invalid.
 */
function getMovementPoints(from, to) {
  const locations = Object.keys(movementChart)
  const fromIndex = locations.indexOf(from)
  const toIndex = locations.indexOf(to)

  if (fromIndex === -1 || toIndex === -1) {
    console.error("Invalid location names provided.")
    return null
  }

  return movementChart[from][toIndex]
}

// Example usage
console.log(getMovementPoints("MOR", "Ring Corner")) // Output: 3
console.log(getMovementPoints("Apron", "Locker Room")) // Output: 15
console.log(getMovementPoints("Crowd", "Special Interview")) // Output: 8
console.log(getMovementPoints("Invalid", "Runway")) // Output: null (error message logged)
