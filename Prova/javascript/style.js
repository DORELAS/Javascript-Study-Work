var emer = 'Dori';

var person = {

    emeri: 'Dorela',
    mbiemer: 'Sinjari',

    plotesisht: function() {
        var self =this;
        console.log(this.emeri + ' ' + this.mbiemer);

        function pershendet() 
        {
            console.log('Ckemi ' + self.emeri);
        }
        pershendet();
    }
}

person.plotesisht();

var person2 = {
   
    emeri: 'DIkush',
    mbiemer: 'Tjeter'
};

person2.plotesisht = person.plotesisht;
person.plotesisht();
person2.plotesisht();