// const asyncAdd = (a, b) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (typeof a === 'number' && typeof b === 'number') {
//         resolve(a + b);
//       } else {
//         reject('Arguments must be numbers');
//       }
//     }, 1500)
//   })
// };

// asyncAdd(5, 7).then((result) => {
//   console.log(`Result: ${result}`);
//   return asyncAdd(result, 33);
// }).then((result) => {
//   console.log(`Should be 45: ${result}`);
// }).catch((errorMessage) => {
//   console.log(errorMessage);
// });

// const somePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Hey. It worked!');
//     // reject('Unable to fulfill promise');
//   }, 2500);
// });
//
// somePromise.then((message) => {
//   console.log('Success: ', message);
// }, (message) => {
//   console.log('Failure: ', message);
// });


const asyncMultiply = (a, b) => {
  return new Promise((resolve, reject) => {
    if (typeof a === 'number' && typeof b == 'number') {
      resolve(a * b);
    } else {
      reject('Arguments must be a number');
    }
  })
}

asyncMultiply(2, 3).then((result) => {
  console.log(`Result: ${result}`);
  return asyncMultiply(result, 4);
}).then((result) => {
  console.log(`Result: ${result}`);
}).catch((err) => {
  console.log(err);
})