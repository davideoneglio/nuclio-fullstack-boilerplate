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
//Ya estaba al principio, que es?
/*Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});*/

//Añadido por mi

Route::group(['middleware' => 'auth.jwt'], function (){

    Route::post('/users','UsersController@create');

    Route::get('/users', 'UsersController@findAll');

    Route::get('/users/{id}', 'UsersController@findById');

    Route::post('/refresh','AuthController@refresh');

    Route::post('/logout','AuthController@logout');

});

Route::post('/register','AuthController@register');

Route::post('/login','AuthController@login');











