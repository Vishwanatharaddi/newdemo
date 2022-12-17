console.log('person1: show ticket');
console.log('person2: show ticket');

const perMovie = async () => {

const promiseWifeBringingTickets = new Promise((resolve,reject) =>{
    setTimeout(() => reject('person 3 : ticket'), 3000);
});

 let ticket = promiseWifeBringingTickets;
 return ticket;
}
 
await perMovie().then((m) => console.log(m)).catch(console.log("Error"));

console.log('person4: show ticket');
console.log('person5: show ticket');

