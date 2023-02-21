//Asynchronous

//1. parallel
/*console.log("Baris 1");
console.log("Baris 2");
console.log("Baris 3"); 

setTimeout(()=>{
    console.log("Proses 1");
}, 3000);
setTimeout(()=>{
    console.log("Proses 2");
}, 5000);
console.log("proses 3");*/

//1.  Concurent
/*setTimeout(()=>{
console.log("Proses 1");
setTimeout(()=>{
console.log("Proses 2");
setTimeout(()=>{
console.log("Proses 3");
}, 5000);
}, 5000);
}, 3000);*/

//promise
let condition = true;
let newPromise = new Promise ((resolve, reject)=>{
    if (condition){
        resolve ("Berhasil");
    } else {
        reject ("Gagal");
        
    }
});

//Cara 1: then-catch
newPromise
.then((result) => console.log(result))
.catch((error) => console.log(error));













