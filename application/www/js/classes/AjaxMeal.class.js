'use strict'
var jsonView = function(){

    this.products = [];
    this.loadLocalStorage();
    $('#meal').on('change', this.onChangeView.bind(this));
    $('#addMeal').on('click', this.addLocalStorage.bind(this));
}

jsonView.prototype.onChangeView = function()
{
    var value = $('#meal').val();
    console.log(value);

    $.getJSON('http://localhost/restaurant/index.php/meal?id='+value, this.jsonCallback);
}

jsonView.prototype.jsonCallback = function(response){

    console.log(response);

    $('#meal-details img').attr("src", getWwwUrl()+'/images/meals/'+response.Photo);
    $('#meal-details h3').html(response.Name);
    $('#meal-details p ').html(response.Description)
    $('#meal-details span strong').html(response.SalePrice)
}

jsonView.prototype.addLocalStorage = function(event){
    event.preventDefault();
    var product = {
        mealId : $('#meal').val(),
        name : $('#meal-details h3').text(),
        quantity: $('#quantity').val(),
        salePrice : $('#meal-details span strong').text()
    }

    
    this.products.push(product);

    saveDataToDomStorage('panier', this.products);

}

jsonView.prototype.loadLocalStorage = function(){
    this.products = loadDataFromDomStorage('panier');

    if (this.products == null) {
        this.products = [];
    }
}