function todo(timeOfDay) {
  switch (timeOfDay) {
    case "morning": {
      brushingTeeth();
      skinCare();
      breakfast();
      break;
    }
    case "lunch": {
      goToOffice();
      Codding();
      lunch();
      Codding();
      break
    }
    case "evening": {
      education();
      Codding();
      goHome();
      shower();
      brushingTeeth();
      skinCare();
      sleep();
      break
    }
  }
}

todo("lunch");

function brushingTeeth() {
  console.log("brushingTeeth");
}
function skinCare() {
  console.log("skingCare");
}
function breakfast() {
  console.log("breakfast");
}

function goToOffice() {
  console.log("GoingToOffice");
}
function Codding() {
  console.log("Codding");
}

function lunch() {
  console.log("HavingLunch");
}
function breakfast() {
  console.log("breakfast");
}

function education() {
  console.log("education");
}
function goHome() {
  console.log("goHome");
}

function shower() {
  console.log("shower");
}
function sleep() {
  console.log("sleep");
}