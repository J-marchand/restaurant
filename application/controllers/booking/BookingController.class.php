<?php

class BookingController
{
    public function httpGetMethod(Http $http, array $queryFields)
    {
        
    }

    public function httpPostMethod(Http $http, array $formFields)
    {
        $post = $_POST;

        $newBooking = new BookingModel();
        $newBooking->Booking($post);
        
        
    }
}
?>