<?php


namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class BoardCard extends Model
{
    protected $table = 'cards';

    protected $fillable = [
        'lists_id',
        'title',
        'ordering'
    ];

    protected function lists()
    {
        return $this->belongsTo(BoardList::class);
    }

    protected function cardActivity()
    {
        return $this->hasOne(CardActivity::class);
    }
}
