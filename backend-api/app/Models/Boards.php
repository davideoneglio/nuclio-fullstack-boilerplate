<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Boards extends Model
{
    protected $table = 'boards';

    protected $fillable = [
        'id',
        'user_id',
        'title',
        'created_at',
        'updated_at'
    ];
}

// añadir timestamp para fazer o "recently accessed" das boards updat

/* añadir timestamp para fazer o "recently accessed" das boards
updat
