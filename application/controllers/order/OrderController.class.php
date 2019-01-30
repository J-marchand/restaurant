<?php

class OrderController
{
    public function httpGetMethod(Http $http, array $queryFields)
    {
		$mealModel = new MealModel();
		$meals = $mealModel->listAll();

		return [
			'meals' => $meals
		];
    }

    public function httpPostMethod(Http $http, array $formFields)
    {
    	
    }
}