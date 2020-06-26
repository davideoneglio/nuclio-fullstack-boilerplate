<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/boards/{title}', 'BoardsController@create');

Route::get('/boards', 'BoardsController@findAll');

Route::get('/boards/{title}', 'BoardsController@findByTitle');

Route::put('/boards/{title}', 'BoardsController@update');

Route::delete('/boards/{title}', 'BoardsController@delete');
