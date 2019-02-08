<?php

class PaymentController
{
    public function httpGetMethod(Http $http, array $queryFields)
    {
        
    }

    public function httpPostMethod(Http $http, array $formFields)
    {
        
        $orders = json_decode($_POST['totalOrder']);

        $ordermodel = new OrderModel();
        $orderId = $ordermodel->newOrder();

        $totalAmount = 0;

        foreach($orders as $order){

            $mealModel = new MealModel();
            $salePrice = $mealModel->findSalePrice($order->mealId);
            $order->safeSalePrice = $salePrice['SalePrice'];

            $totalAmount += $salePrice['SalePrice'] * $order->quantity;

            $ordermodel -> addOrderLine($order -> quantity, $order -> mealId, $orderId, $order -> safeSalePrice); 
        }

        

        $taxeRate = 0.2;
        $taxeAmount = $totalAmount * $taxeRate;  
        
        $update = new OrderModel();
        $update->updateOrder($totalAmount, $taxeRate, $taxeAmount, $orderId);
    }
}