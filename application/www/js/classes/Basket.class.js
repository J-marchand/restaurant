var Basket = function(){

    this.products = [];
    
    this.loadLocalStorage();
    this.buildProduct();
    $('#addMeal').on('click', this.addLocalStorage.bind(this));
    $(document).on('click','.button-delete-product', this.deleteProduct.bind(this));
}

Basket.prototype.addLocalStorage = function(event){
    event.preventDefault();
    
    var product = {
        mealId : $('#meal').val(),
        name : $('#meal-details h3').text(),
        quantity: parseInt($('#quantity').val()),
        salePrice : $('#meal-details span strong').text()
    }


    for(var i = 0; i < this.products.length; i++){
        if(this.products[i].mealId == product.mealId){

        this.products[i].quantity += product.quantity;
        saveDataToDomStorage('panier', this.products);
        this.buildProduct();
        return;
        }
    }
    
    this.products.push(product);
    this.buildProduct();
    saveDataToDomStorage('panier', this.products);


}

Basket.prototype.loadLocalStorage = function(){
    this.products = loadDataFromDomStorage('panier');

    if (this.products == null) {
        this.products = [];
        this.buildProduct();
    }
}

Basket.prototype.buildProduct = function(){
    
    $('#order').empty();
    
    

    for(var i = 0; i <this.products.length; i++){

        var tr = $('<tr>');
            tr.append('<td class="number">'+this.products[i].quantity+'</td>');
            tr.append('<td class="number"><strong>'+this.products[i].name+'</strong></td>');
            tr.append('<td class="number">'+this.products[i].salePrice+'€</td>');
            tr.append('<td class="number">'+this.products[i].salePrice * this.products[i].quantity+'</td>');
            tr.append('<td><button class="button button-cancel small button-delete-product" data-mealid="'+i+'"><i class="fa fa-trash"></i></button></td>');
            $('#order').append(tr);
    }
}

Basket.prototype.deleteProduct = function(event){

    event.preventDefault();
    var id = event.currentTarget.dataset.mealid;

    console.log(id);
    this.products.splice(id, 1);
    saveDataToDomStorage('panier', this.products);
    this.buildProduct();

}