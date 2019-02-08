<?php 

class UserModel
{
    private function hashPassword($password)
    {

        $salt = '$2y$11$'.substr(bin2hex(openssl_random_pseudo_bytes(32)), 0, 22);
        return crypt($password, $salt);
    }

    private function verifyPassword($password, $hashedPassword)
	{
		return crypt($password, $hashedPassword) == $hashedPassword;
    }

    public function addUser($POST)
    {
        $hashPwd = $this->hashPassword($POST['password']);

        $data = new Database();
		$user = $data -> executeSql('INSERT INTO 
                                    user(`FirstName`, `LastName`, `Email`, `Password`, `BirthDate`, `Adress`, `City`, `ZipCode`, `Phone` ) 
                                    VALUES 
                                    (?, ?, ?, ?, ?, ?, ?, ?, ?)',
							    [
                                    $POST['firstName'],
                                    $POST['lastName'],
                                    $POST['email'],
                                    $hashPwd,
                                    $POST['birthYear'].'-'.$POST['birthMonth'].'-'.$POST['birthDay'],
                                    $POST['address'],
                                    $POST['city'],
                                    $POST['zipCode'],
                                    $POST['phone']
                                ]);

        $http = new Http;
        $http->redirectTo('/');
    }

    public function loginUser($POST)
    {
        $data = new Database();
        $info = $data -> queryOne(
                            'SELECT
                                *
                            FROM
                                user
                            WHERE
                                Email= ?',
                            [
                                $POST['email']
                            ]
                            );

        $verifPsw = $this->verifyPassword($POST['password'], $info['Password']);

        if($verifPsw == true){

            $_SESSION['FirstName']  = $info['FirstName'];
            $_SESSION['LastName']   = $info['LastName'];
            $_SESSION['Email']      = $info['Email'];
            $_SESSION['Password']   = $info['Password'];
            $_SESSION['BirthDate']  = $info['BirthDate'];
            $_SESSION['Adress']     = $info['Adress'];
            $_SESSION['City']       = $info['City'];
            $_SESSION['ZipCode']    = $info['ZipCode'];
            $_SESSION['Phone']      = $info['Phone'];
            $_SESSION['Id']         = $info['Id'];

            $http = new Http;
            $http->redirectTo('/');
        }
        
    }

    
}