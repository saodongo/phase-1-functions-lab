// Function to calculate distance from Scuber's HQ in blocks
function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue - 42); // Assuming HQ is on 42nd Street
  }
  
  // Function to calculate distance from HQ in feet
  function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264; // 1 block = 264 feet
  }
  
  // Function to calculate distance travelled in feet between two blocks
  function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264;
  }
  
  // Function to calculate fare price based on distance travelled
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0; // First 400 feet are free
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02; // 2 cents per foot after the first 400 feet
    } else if (distance > 2000 && distance <= 2500) {
      return 25; // Flat fare for distances between 2000 and 2500 feet
    } else {
      return 'cannot travel that far'; // Distance over 2500 feet is not allowed
    }
  }
  