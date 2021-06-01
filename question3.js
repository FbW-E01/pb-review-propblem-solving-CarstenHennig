// work estimation: 45min

// 3. "Client order"

// Your client SpaceY is creating a new AI system that tries to detect patterns in data using their new algorithm.
// You need to create a function or functions that can be used to generate data that looks like this:

//     [
//         { id: "00000005", time: "21.11.2001 14:11:21 UTC" }
//         { id: "00328105", time: "01.04.2021 03:10:31 UTC" }
//         { id: "01128503", time: "11.01.2003 13:04:05 UTC" }
//         { id: "11160001", time: "10.12.1997 14:51:55 UTC" }
//     ]

// Your function will need to generate data based on three different inputs:

//     - idLength:number - how long should the "id" field be; how many numbers. IDs do not need to be unique.
//     - startDate:string - the first date when your data should be created (from 00:00:00)
//     - endDate:string - the last date when your data should be created (to 23:59:59)

// Also, add a comment where you report how long does it take to generate 10 million lines of data.
let myArray = [];
function bigData(objects) {
  myArray.push(objects);
  console.log(myArray);
}
let start = new Date().getMilliseconds();
// Math.pow(10, 6) * 10 // takes approx. 1000000 milliseconds to generate
for (i = 0; i < 10; i++) {
  const idRandom = Math.ceil(Math.pow(9, Math.random() * 10));
  const startDateRandom = new Date(
    Math.random() * 30,
    Math.random() * 365
  ).toISOString();
  const endDateRandom = new Date(
    Math.random() * 30 + 30,
    Math.random() * 365 + 1
  ).toISOString();
  bigData({
    id: idRandom,
    startDate: startDateRandom,
    endDate: endDateRandom,
  });
}
let time = new Date().getMilliseconds();
console.log(`Time of generating 10 objects: ${time - start} ms`);
