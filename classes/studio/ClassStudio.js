//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor(name, mass, scores) {
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }
    addScore(newscore)
    {
        this.scores.push(newscore);
    }

    
    average(){
        let sum = 0;
        for(let i =0; i<this.scores.length; i++){
            sum += this.scores[i]
        }
        console.log(sum);
        return Math.round((sum/this.scores.length)*10)/10;
    }

    status() {
        let avg = this.average();
        let result;
        if (avg >= 90) {
            result = "Accepted";
        } else if (avg >= 80 && avg <= 89){
            result = "Reserve";
        } else if (avg >= 70 && avg <= 79){
            result = "Probationary";
        } else {
            result = "Rejected";
        }
        return `${this.name} earned an average test score of ${avg} and has a status of ${result}`
    }
}

let bubba = new CrewCandidate("Bubba Bear", 135, [88,85,90]);
let merry = new CrewCandidate("Merry Maltese", 1.5, [93,88,97]);
let glad = new CrewCandidate("Glad Gator", 225, [75,78,62]);
//console.log(bubba, merry, glad);
bubba.addScore(83);
console.log(merry);
console.log(merry.average());

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.nsnds
console.log(bubba.status());
console.log(glad.status());
glad.addScore(100);

let num = 0;
while (glad.average() < 90) {
    num += 1
    glad.addScore(100);
    console.log(glad.status());
}
console.log(`Glad finally passed after ${num} times.`);

//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.