// Array of objects
let data = [
    { principal: 2500, time: 1.8 },
    { principal: 1000, time: 5 },
    { principal: 3000, time:1 },
    { principal: 2000, time: 3 },
];

// A functon taking an array as a single argument
function interestCalculator(myArray) {

    let interestData = [];

    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i].principal >= 2500 && myArray[i].time > 1 && myArray[i].time < 3) {
            myArray[i].rate = 3;
        }
        else if (myArray[i].principal >= 2500 && myArray[i].time >= 3) {
            myArray[i].rate = 4;
        }
        else if (myArray[i].principal < 2500 || myArray[i].time <= 1) {
            myArray[i].rate = 2;
        } 
        else {
            myArray[i].rate = 1;
        }

        myArray[i].interest = (myArray[i].principal * myArray[i].rate * myArray[i].time) / 100;

        interestData.push(myArray[i]);

    }

    console.log(interestData);

    return interestData;
    
}

interestCalculator(data);





