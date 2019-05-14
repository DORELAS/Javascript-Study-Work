function data ()
{
    var clock =  new Date();

    var ore = clock.getHours() + '';
    var min = clock.getMinutes() + '';
    var sec = clock.getSeconds() + '';
    var dita = clock.getDay() + '';

    if(ore.length < 2)
    {
        ore = '0' + ore;
    }
    
    if(min.length < 2)
    {
        min = '0' + min;
    }
    
    if(sec.length < 2)
    {
       sec = '0' + sec;
    }

 var java = ["E hene", "E marte", "E merkure", "E enjte", "E premte", "E shtune", "E diel"];

 var koha =java[dita-1] + ' ' + ore + ":" + min + ':' + sec;

document.getElementById('ora').innerHTML = koha;

 console.log(koha);

}

data();

setInterval(data, 1000);