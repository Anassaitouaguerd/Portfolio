<?php

namespace App\Http\Controllers\JWT;

use App\Http\Controllers\Controller;
use Firebase\JWT\JWT;

class Token extends Controller
{
    public function token($user)
    {
        $key = env('SECRET_KEY');
        $payload = [
            'name' => $user->name,
            'id' => $user->id,
            'email' => $user->email
        ];
        $jwt = JWT::encode($payload, $key, 'HS256');
        return $jwt;
    }
}