<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use MongoDB\Laravel\Eloquent\Model;

class Information extends Model
{
    use HasFactory;
    protected $connection = "mongodb";
    protected $collection = "informations";
    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'tel',
        'github',
        'linkdin',
    ];
}
