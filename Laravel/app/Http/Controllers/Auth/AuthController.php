<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Controllers\JWT\Token as JWTToken;
use App\Http\Requests\User\AddUserRequest;
use App\Http\Requests\User\CheckUserRequest;
use Illuminate\Support\Facades\Session;
use App\Models\User;
use Illuminate\Support\Facades\Cookie;

class AuthController extends Controller
{
    protected $access_token;
    public function __construct()
    {
        $this->access_token = new JWTToken();
    }
    public function Login(CheckUserRequest $request)
    {
        $credentials = $request->only('email', 'password');
        $user = User::where('email', $credentials['email'])->first();
        if ($user) {
            session()->put('user_id', $user->id);
            session()->put('user_name', $user->name);
            $token = $this->access_token->token($user);
            $cookie = cookie('token', $token, 60);
            return response()->json(['message' => 'Login successful'], 200)->cookie($cookie);
        }
    }
    public function logout()
    {
        Session::flush();
        $cookie = Cookie::forget('token');
        return response()->json(['message' => 'Logout successful'], 200)->withCookie($cookie);
    }
}