const people = [
    {    name: 'Dorela', lastname:'Sinjari'},
    
    {    name: 'Sidorela', lastname: 'Sinjari'}
    
    ];
    
    function getPerson() {
        setTimeout(() => {
    
            let output = '';
            people.forEach((person, index) => {
                output += `<li>${person.name}</li>`;
            });
                document.body.innerHTML = output;
    
        }, 1000);
    };
    
    function createperson(person) {
        return new Promise ((resolve, reject) => {

            setTimeout(() => {
                people.push(person);
                
                const error = false;

                if(!error) {
                    resolve();
                } else {
                    reject('Something went wrong!');
                }
            }, 2000);
        });

    };
//    createperson({name: 'Doremi', lastname: 'Sinjari'}).then(getPerson).catch(error => console.log(error));

async function init() {

    await createperson({name: 'Doremi', lastname: 'Sinjari'});
    getPerson();

    const res = fetch('#');
    const data = await res.json();
    console.log(data);

};
init();

//const promise1 = Promise.resolve('Dorela');
//const promise2 = 15;
//const promise3 = new Promise((resolve, reject) => {
  //  setTimeout(resolve, 2000, 'Sinjari');
//});

//Promise.all([promise1, promise2, promise3]).then(values => console.log(values));