console.log('E di qe ke hapur console dhe po shikon kodin qe une kam shkruajtur!');


function mesatarja (emer, pike)
{
    var kalon = 50;
    
    if (pike > 50)
    {
        console.log(emer + ' keni gjithsej ' + pike + ' , po kaloni.');
    }
    else 
    {
        console.log(emer + 'keni gjithsej ' + pike + ' , ju nuk kaloni.');
    }

}


var vlere = function piket (matematike, letersi)
{
  var mesatare = matematike + letersi;
  return mesatare;
}

mesatarja ('Katrina ', vlere(20, 15));


var array = ['dorela', 'sinjari', 22, 15, 10, [1, 9, 9, 6], 

function piket (matematike, letersi)
{
  var mesatare = matematike + letersi;
  return mesatare;
} ];

console.log(array);
console.log(array[1]);
console.log(array[5][3]);
console.log(array[6]);
console.log(array[6](array[2],array[3]));


array.push('true');
console.log(array);

array.pop();
console.log(array);

array.shift();
console.log(array);

array.unshift("dorela");
console.log(array);

if(array.indexOf('js')===-1)
{
   array.push('js');
}
console.log(array);

/* OBJECTS*/

var njeri = new Object();

njeri.emer = 'dorela';
njeri['mbiemer'] = 'sinjari';
njeri.hobi = new Object();
njeri.hobi.programim = 'Javascript';

console.log(njeri);

var femer = {emer: 'Miranda', mbiemer: 'Sinjari', profesioni: 'nene', vajza: { emer: 'Dorela'
, profesioni: 'programuese' }, 
funk: function prove (mami, bije, shkolle) {
    console.log(mami + ' ka per vajze ' + bije + ' e cila ka studiuar per ' + shkolle );
}
};

console.log(femer);

femer.funk(femer.emer, femer.vajza.emer, femer.vajza.profesioni);


var data = new Date();
console.log(data);

var viti = data.getFullYear();
console.log(viti);

var muaji = data.getMonth() + 1;
console.log(muaji);

var dita = data.setFullYear(2020);
console.log(dita);