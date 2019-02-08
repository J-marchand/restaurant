<?php

class OrderModel {

    public function newOrder(){

        $data = new Database();
        $orderId = $data->executeSql('INSERT INTO 
                                        `Order`(`User_Id`, `CreationTimestamp`, `Status`) 
                                    VALUES 
                                        (?, NOW(), ?)',                                        
                                    [$_SESSION['Id'], 'previous']);      

                                    return $orderId;
    }

    public function addOrderLine($quantity, $mealId, $orderId, $salePrice){

        $data = new Database();
        $data->executeSql('INSERT INTO 
                            `OrderLine`(`QuantityOrdered`, `Meal_Id`, `Order_Id`, `PriceEach`) 
                        VALUES 
                            (?, ?, ?, ?)',
                        [$quantity, $mealId, $orderId, $salePrice]);
    }

    public function updateOrder($totalAmount, $taxeRate, $taxeAmount, $orderId)
    {     

        $data = new Database();
        $data->executeSql('UPDATE 
                            `Order` 
                        SET 
                            `TotalAmount`=?,`TaxRate`=?,`TaxAmount`=?,`CompleteTimestamp`=NOW(),`Status`=?
                        WHERE Id=?',
                        [$totalAmount, $taxeRate, $taxeAmount, 'shipped', $orderId]);
    }
}

?> 