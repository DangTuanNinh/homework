const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

function caculateTravel() {
  let time = travelInformation.destinationDistance / travelInformation.speed;
  const hours = Math.floor(time);
  const minutes = Math.round(time - hours) * 60;
  return `${hours} hours and ${minutes} minutes`;
}

const travelTime = caculateTravel(travelInformation);
console.log(travelTime);
