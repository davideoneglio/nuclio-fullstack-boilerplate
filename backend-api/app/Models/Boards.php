<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Boards extends Model
{
    protected $table = 'boards';

    protected $fillable = [
        'id',
        'user_id',
        'title'
    ];
}
