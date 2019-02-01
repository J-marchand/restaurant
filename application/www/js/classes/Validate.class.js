'use strict'

var Validate = function(){

    this.basket = new Basket();

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
    }
}