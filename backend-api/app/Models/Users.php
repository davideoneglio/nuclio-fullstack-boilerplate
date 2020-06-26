<?php


namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Users extends Model
{
    protected $table = 'users_trello';

    protected $fillable = [
        'name',
        'email',
        'password',
        'created_at',
        'updated_at',
    ];

    /*protected function users () {
        return $this->hasMany(Users::class);
    }

    protected function owner() {
        return $this->hasOne(User::class);
    }*/
}
