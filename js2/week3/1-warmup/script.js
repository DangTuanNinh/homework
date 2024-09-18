function log(delay, stringToLog) {
  const delayInMilliseconds = delay * 1000;
  setTimeout(() => {
    console.log(stringToLog);
  }, delayInMilliseconds);
}
log(2.5, "Called after 2.5 seconds");

function Click() {
  logAfterDelay(5, "Called after 5 seconds");
}
const EarthLogger = () => {
  console.log("Earth");
};
const saturnLogger = () => {
  console.log("Saturn");
};
function planetLogFunction(planetLogFunction) {
  planetLogFunction();
}
planetLogFunction(EarthLogger);
planetLogFunction(saturnLogger);

function logLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
      },
      (error) => {
        console.error("Lỗi không nhận được vị trí:", error.message);
      }
    );
  } else {
    console.error("Định vị vị trí địa lý không được hỗ trợ");
  }
}

function logMessage() {
  console.log("Tin nhắn được log ra sau độ trễ");
}

function runAfterDelay(delay, callback) {
  const delayInMilliseconds = delay * 1000;

  setTimeout(() => {
    callback();
  }, delayInMilliseconds);
}

runAfterDelay(2, logMessage);

const jokeCreator = (shouldTellFunnyJoke, logFunnyJoke, logBadJoke) => {
  if (shouldTellFunnyJoke === true) logFunnyJoke();
  else logBadJoke();
};
const logFunnyJoke = () => {
  console.log("logFunnyJoke ");
};
const logBadJoke = () => {
  console.log("logBadJoke ");
};
jokeCreator(true, logFunnyJoke, logBadJoke);
