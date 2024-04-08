<?php

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\CRUD\ExperiencesController;
use App\Http\Controllers\CRUD\FormationsController;
use App\Http\Controllers\CRUD\InformationsController;
use Illuminate\Support\Facades\Route;

Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);
Route::get('/logout', [AuthController::class, 'logout']);

Route::apiResources([
    '/experiences' => ExperiencesController::class,
    '/formations' => FormationsController::class,
    '/information' => InformationsController::class,
]);