'use strict'
var jsonView = function(){  
    
    this.basket = new Basket();
    $('#meal').on('change', this.onChangeView.bind(this));    
}

jsonView.prototype.onChangeView = function()
{
    var value = $('#meal').val();
    //console.log('coucou');

    $.getJSON('http://localhost/restaurant/index.php/meal?id='+value, this.jsonCallback);
}

jsonView.prototype.jsonCallback = function(response){

    console.log(response);

    $('#meal-details img').attr("src", getWwwUrl()+'/images/meals/'+response.Photo);
    $('#meal-details h3').html(response.Name);
    $('#meal-details p ').html(response.Description)
    $('#meal-details span strong').html(response.SalePrice)
}


