<?php


namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class BoardCard extends Model
{
    protected $table = 'cards';

    protected $fillable = [
        'list_id',
        'description',
        'ordering'
    ];

    protected function list()
    {
        return $this->belongsTo(BoardList::class);
    }

    protected function cardActivity()
    {
        return $this->hasOne(CardActivity::class);
    }
}
