<?php

class BookingModel {
    
    public function Booking($post){

        $data = new Database();
        $data->executeSql('INSERT INTO 
                                `Booking`(`BookingDate`, `BookingTime`, `NumberOfSeats`, `User_Id`, `CreationTimestamp`) 
                            VALUES 
                                (?, ?, ?, ?, NOW())',
                            [
                                $post['bookingYear'].'-'.$post['bookingMonth'].'-'.$post['bookingDay'],
                                $post['bookingHour'].':'.$post['bookingMinute'],
                                $post['numberOfSeats'],
                                $_SESSION['Id']
                            ]);

    }
}