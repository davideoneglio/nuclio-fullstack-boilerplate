<?php


namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class BoardList extends Model
{
    protected $table = 'lists';

    protected $fillable = [
        'board_id',
        'title',
        'ordering'
    ];

    protected function board()
    {
        return $this->belongsTo(Board::class);
    }

    protected function cards()
    {
        return $this->hasMany(BoardCard::class);
    }
}
