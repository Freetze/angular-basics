let a = 5;
let b = 10;

function asynclogger() {
    return new Promise((resolve, reject) => 
        setTimeout(() => {
            if (b > a) {
                resolve('Nagyobb a B');
            } else {
                reject('Nagyobb :(');
            }
            
        }, 3000)

)}

// asynclogger()
//        .then((str) => console.log(str)) //sikeres
  //      .catch((err => console.log(err)) //sikertelen
    //    .finally(() => {}) //lefutott


      async function handleAsynCall() {
      

        try {
            console.log('promise előtt');
            const message = await asynclogger();
            console.log(message);
        } catch(err) {
            console.log(err);
        }
        console.log('promise után');
 }

handleAsynCall()