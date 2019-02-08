'use strict'

var Validate = function(){

    this.basket = new Basket();
    this.totalHT = 0;
    this.TVA = 1.20;
    this.totalTTC = 0;
    this.totalTVA = 0;
}

Validate.prototype.loadBasket = function() {

    this.products = loadDataFromDomStorage('panier');



    //console.log(this.products[0].name)
    $('#validateOrder').empty();

    for(var i = 0; i < this.products.length; i++){

        var tr = $('<tr>');

        tr.append('<td>'+this.products[i].name+'</td>');
        tr.append('<td class="number">'+this.products[i].quantity+'</td>');
        tr.append('<td class="number">'+this.products[i].salePrice+'</td>');
        tr.append('<td class="number">'+this.products[i].salePrice * this.products[i].quantity+'</td>')
        $('#validateOrder').append(tr);        
        
        this.totalHT += this.products[i].salePrice * this.products[i].quantity;        
        
        var order = JSON.stringify(this.products);

        $('#totalOrder').val(order);
    }

    
    this.totalTVA = ((this.totalHT*this.TVA) - this.totalHT);
    this.totalTTC = this.totalHT + this.totalTVA;

    $('#totalht').html(this.totalHT);
    $('#tva').html(this.totalTVA.toFixed(2));
    $('#totalttc').html(this.totalTTC);


    


    

    



}