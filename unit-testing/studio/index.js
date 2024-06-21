
let launchcode = {
  organization : "nonprofit",
  executiveDirector : "Jeff",
  percentageCoolEmployees : 100,
  programsOffered : ["Web Development", "Data Analysis", "Liftoff"],
  launchOutput : launchOutput
}

function launchOutput(num) {
    if (num % 2 === 0) {
        return 'Launch!';
    } if else (num % 3 === 0) {
        return 'Code!';
    } else {
        return 'No launch';
    }
  }


module.exports = {
    launchcode : launchcode,
    launchOutput : launchOutput
}
