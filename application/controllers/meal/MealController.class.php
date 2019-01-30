<?php

class MealController
{
    public function httpGetMethod(Http $http, array $queryFields)
    {
        $findProduct = new MealModel();
        $find = $findProduct->findProduct($_GET['id']);

        echo json_encode($find);
        exit();
    }

    public function httpPostMethod(Http $http, array $formFields)
    {
    	
    }
}