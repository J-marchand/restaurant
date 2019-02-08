'use strict';

/////////////////////////////////////////////////////////////////////////////////////////
// FONCTIONS                                                                           //
/////////////////////////////////////////////////////////////////////////////////////////

if (document.location.href.indexOf('order') != -1 && document.location.href.indexOf('order/validate') == -1 && document.location.href.indexOf('order/payment') == -1) {
    
    var jsonView = new jsonView();
    jsonView.onChangeView();
}

if (document.location.href.indexOf('order/validate') != -1) {
    

    var validate = new Validate();
    validate.loadBasket();
}

if (document.location.href.indexOf('order/payment') != -1) {
    

    var charge = new Charge();
    charge.procedePayment();
}








/////////////////////////////////////////////////////////////////////////////////////////
// CODE PRINCIPAL                                                                      //
/////////////////////////////////////////////////////////////////////////////////////////

