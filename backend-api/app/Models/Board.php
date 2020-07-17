<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Board extends Model
{
    protected $table = 'boards';

    protected $fillable = [
        'title',
        'user_id'
    ];

//es correcto?
    protected function user()
    {
        return $this->belongsTo(User::class);
    }

    protected function lists()
    {
        return $this->hasMany(BoardList::class);
    }
}

