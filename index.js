// Code your solution in this file!
// 1. Distance from HQ in blocks (HQ is on 42nd street)
function distanceFromHqInBlocks(street) {
  return Math.abs(street - 42);
}

// 2. Distance from HQ in feet
function distanceFromHqInFeet(street) {
  return distanceFromHqInBlocks(street) * 264;
}

// 3. Distance travelled in feet between two blocks
function distanceTravelledInFeet(start, destination) {
  return Math.abs(destination - start) * 264;
}

// 4. Fare price calculation
function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}

// Export functions so tests can see them
module.exports = {
  distanceFromHqInBlocks,
  distanceFromHqInFeet,
  distanceTravelledInFeet,
  calculatesFarePrice,
};
