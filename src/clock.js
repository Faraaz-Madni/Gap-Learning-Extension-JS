const dayjs = require("dayjs")

var timeNow = dayjs();
// console.log(timeNow.$d);

var timeThen = timeNow.add(31, "minutes");
// console.log(timeThen.$d);

var timeDifference = timeThen.subtract(timeNow);
// console.log(timeDifference.$d);

function randomIntervals (start, end){
    start = timeNow;
    end = timeThen;
    diff = timeDifference;
    console.log(`The time difference is ${diff.$m} minutes`);
    let t1 = [];
    for (let i=0; i < Math.ceil(diff.$m/2); i++ ){
        let gen = new Date(start + Math.random() * diff);
        t1.push(gen);
    };
    console.log(t1.sort());
    console.log(`Generated ${Math.ceil(diff.$m/2)} entries`);
    console.log(`Entries were generated between ${start.$} and ${end}.`)

}

randomIntervals()