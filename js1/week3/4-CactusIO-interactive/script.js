const activities = [];

function addActivity(date, activity, duration) {
  activities.push({ date, activity, duration });
}

addActivity("23/7-18", "Youtube", 30);

console.log(activities);

function showStatus() {
  if (activities.length === 0) {
    console.log("Add some activities before calling showStatus");
    return;
  }

  let totalDuration = 0;
  activities.forEach((activity) => {
    totalDuration += activity.duration;
  });

  console.log(
    `You have added ${activities.length} activities. They amount to ${totalDuration} min. of usage`
  );
}

showStatus();
