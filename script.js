window.addEventListener("load", function () {
  const doorPositions = [
    { x: 670, y: 650 }, // Door1
    { x: 705, y: 650 }, // Door2
    { x: 850, y: 650 }, // Door3
    { x: 885, y: 650 }, // Door4
    { x: 1060, y: 650 }, // Door5
    { x: 1095, y: 650 }, // Door6
    { x: 1235, y: 650 }, // Door7
    { x: 1270, y: 650 }, // Door8
    { x: 660, y: 743 }, // Door9
    { x: 705, y: 743 }, // Door10
    { x: 850, y: 743 }, // Door11
    { x: 885, y: 743 }, // Door12
    { x: 1050, y: 743 }, // Door13
    { x: 1085, y: 743 }, // Door14
    { x: 1235, y: 743 }, // Door15
    { x: 1270, y: 743 }, // Door16
  ];

  // Initialize doors and set their positions
  doorPositions.forEach((position, index) => {
    try {
      const door = document.getElementById(`door${index + 1}`);
      door.style.left = `${position.x}px`;
      door.style.top = `${position.y}px`;
    } catch (error) {
      console.error(`Error in door${index + 1}:`, error);
    }
  });

  const doorMsgPositions = [
    { x: 630, y: 563 }, // Door1
    { x: 675, y: 563 }, // Door2
    { x: 810, y: 563 }, // Door3
    { x: 855, y: 563 }, // Door4
    { x: 1020, y: 563 }, // Door5
    { x: 1065, y: 563 }, // Door6
    { x: 1195, y: 563 }, // Door7
    { x: 1240, y: 563 }, // Door8
    { x: 630, y: 835 }, // Door9
    { x: 675, y: 835 }, // Door10
    { x: 810, y: 835 }, // Door11
    { x: 855, y: 835 }, // Door12
    { x: 1010, y: 835 }, // Door13
    { x: 1055, y: 835 }, // Door14
    { x: 1195, y: 835 }, // Door15
    { x: 1240, y: 835 }, // Door16
  ];

  // Initialize turnaround time messages and set their positions
  doorMsgPositions.forEach((position, index) => {
    try {
      const doorMsg = document.getElementById(`door${index + 1}Msg`);
      doorMsg.style.left = `${position.x}px`;
      doorMsg.style.top = `${position.y}px`;
    } catch (error) {
      console.error(`Error in doorMsg${index + 1}:`, error);
    }
  });

  // Function to update door color based on status
  function updateDoorColor(doorNumber, status) {
    const door = document.getElementById(`door${doorNumber}`);
    door.style.backgroundColor = status ? "red" : "green";
    if (status) {
      door.classList.remove("green-door");
    } else {
      door.classList.add("green-door");
    }
  }

  // Function to update door message status
  function updateDoorMsg(doorNumber, status) {
    document.getElementById(`door${doorNumber}Msg`).innerHTML =
      "<div class='smalltext'>Last Reported Turnaround</div>" + status;
  }

  // Connect to Firebase Realtime Database
  const database = firebase.database();

  // Listen for changes in door statuses
  for (let i = 1; i <= 16; i++) {
    const doorRef = firebase.database().ref(`doors/Door${i}`);
    doorRef.on("value", (snapshot) => {
      const status = snapshot.val();
      updateDoorColor(i, status);
    });
  }

  // Listen for changes in door message statuses
  for (let i = 1; i <= 16; i++) {
    const doorMsgRef = firebase.database().ref(`doorsMsg/Door${i}Msg`);
    doorMsgRef.on("value", (snapshot) => {
      const status = snapshot.val();
      updateDoorMsg(i, status);
    });
  }

  // Get reference to the status message in the database
  const statusMessageRef = database.ref("message/main");

  // Listen for changes to the status message
  statusMessageRef.on("value", (snapshot) => {
    const message = snapshot.val();
    const statusMessageElement = document.getElementById("status-message");

    // Add the flashing class
    statusMessageElement.classList.add("flash");

    // Remove the flashing class after 5 seconds
    setTimeout(() => {
      statusMessageElement.classList.remove("flash");
    }, 5000);

    statusMessageElement.innerText = message;
  });

  // Add this inside your "window.addEventListener("load", function ()" block
  // Fetch average turnaround time overall from Firebase
  const averageTurnaroundTimeRef = database.ref(
    "stats/AverageTurnaroundTimeOverall"
  );
  averageTurnaroundTimeRef.on("value", (snapshot) => {
    const averageTurnaroundTime = snapshot.val();
    document.getElementById("average-turnaround-time").textContent =
      averageTurnaroundTime;
  });

  // Fetch individual door turnaround times from Firebase
  for (let i = 1; i <= 16; i++) {
    const doorAverageTurnaroundTimeRef = database.ref(
      `stats/Door${i}AverageTurnaroundTime`
    );
    doorAverageTurnaroundTimeRef.on("value", (snapshot) => {
      const doorAverageTurnaroundTime = snapshot.val();
      document.getElementById(
        `door${i}AverageTurnaroundTime`
      ).textContent = `Door ${i}: ${doorAverageTurnaroundTime}`;
    });
  }
});
