<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use MongoDB\Laravel\Eloquent\Model;

class Formation extends Model
{
    use HasFactory;
    protected $connection = "mongodb";
    protected $collection = "formations";
    protected $fillable = [
        'name',
        'company',
        'lieu',
        'Date_start',
        'Date_end',
    ];
}