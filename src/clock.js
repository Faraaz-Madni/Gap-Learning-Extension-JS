import dayjs from "https://cdn.skypack.dev/dayjs@1.10.3";

const button = document.getElementById('minutes_submit');

button.addEventListener('click', returnTimes);

function returnTimes(){


var timeNow = dayjs();
// console.log(timeNow.$d);

var timeThen = timeNow.add(31, "minutes");
// console.log(timeThen.$d);

var timeDifference = timeThen.subtract(timeNow);
// console.log(timeDifference.$d);

    function randomIntervals (start, end){
        start = timeNow;
        end = timeThen;
        let diff = timeDifference;
        console.log(`The time difference is ${diff.$m} minutes`);
        let t1 = [];
        let t2 = [];

        for (let i=0; i < Math.ceil(diff.$m); i++ ){
            let gen = new Date(start + Math.random() * diff);
            t1.push(gen);
        };

        t1.sort();
        console.log(`!-!-!-`)
        console.log(`Original Array is `)
        console.log(t1);
        console.log(`Original Length of Array is ${t1.length}`)
        console.log(`!-!-!-`)
        t1.forEach(element => {
            let elementVar = dayjs(element);

            let currIndex = t1.indexOf(element);
            let nextIndex = currIndex + 1;

            let nextElementVar = dayjs(t1[nextIndex]);

            console.log(`Index is ${currIndex} and Next Index is ${nextIndex}`);
            console.log(`The element ${elementVar} is being compared with ${nextElementVar}`);

            let difference = nextElementVar.diff(elementVar, 'minutes', true)
            console.log(`The difference between the two elements is ${difference}`);
            
            if (difference > 1.0 ){
                console.log(`The index of the element to be removed is ${currIndex}`);
                t2.push(t1.splice(currIndex - 1, 1));
                console.log(`********The thing being removed is`)
                console.log(t1.splice(currIndex -1, 1))
                console.log(`!!!!!!Added ${t1[currIndex - 1]} to final array`);
            }
        }
        
        ); 

        // Display
        console.log("-- The Final Array Is --");
        t2.sort();
        console.log(t2);
        console.log(`Generated ${Math.ceil(diff.$m)} entries`);
        console.log(`Final Length of Array is ${t2.length}`)
        console.log(`Entries were generated between ${start.$} and ${end}.`)
        alert(`${t2}`);
    }
    randomIntervals()
}

