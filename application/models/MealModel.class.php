<?php

class MealModel {

    public function listAll()
    {
        $data = new Database();
        $meal = $data->query('SELECT
                                *
                            FROM
                                Meal');        
        return $meal;  
    }

    public function findProduct($id)
    {
        $data = new Database();
        $find = $data->queryOne('SELECT
                                *
                            FROM
                                Meal
                            WHERE 
                                Id= ?',
                            [
                               $id
                            ]);

        return $find;
    }
}

?>