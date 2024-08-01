function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    button.addEventListener('click', event => {
        paragraph.innerHTML = 'Houston! We have liftoff!';
    });
    missionAbort.addEventListener('mouseover', event => {
        missionAbort.innerHTML += '<style> #abortMission {background-color: red;}</style>'
    });
    missionAbort.addEventListener('mouseleave', event => {
        missionAbort.innerHTML = 'Abort Mission'
    });
    missionAbort.addEventListener('click', event => {
        let answer = window.confirm("Are you sure you want to abort the mission?")
        if (answer === true) {
            paragraph.innerHTML = 'Mission aborted! Space shuttle returning home'
        }
    })

}

window.addEventListener("load", init);
