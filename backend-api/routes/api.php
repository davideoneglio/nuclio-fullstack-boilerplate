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


//SIRVE PARA ALGO? NECESITO UNA IGUAL PARA BOARDS, LISTS Y CARDS?
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => 'auth.jwt'], function (){

    Route::post('/user', 'UsersController@create');

    Route::get('/users', 'UsersController@findAll');

    Route::get('/user/{id}', 'UsersController@findById');

    Route::post('/refresh', 'AuthController@refresh');

    Route::post('/logout', 'AuthController@logout');

    //RUTAS DE LOS BOARDS

    Route::post('/board', 'BoardsController@create');

    Route::get('/board/{id}', 'BoardsController@findById');

    Route::get('board/user/{user_id}', 'BoardsController@findAllBoardsForLoggedUser');

    Route::put('board/{id}', 'BoardsController@update');

    Route::delete('board/{id}', 'BoardsController@delete');

    //RUTAS DE LAS LISTAS

    Route::post('/list', 'ListsController@create');

    Route::get('/list/{id}', 'ListsController@findById');

    Route::get('list/board/{board_id}', 'ListsController@findByBoardId');

    Route::put('list/{id}', 'ListsController@update');

    Route::delete('list/{id}', 'ListsController@delete');

    //RUTAS DE LAS CARDS

    Route::post('/card', 'CardsController@create');

    Route::get('/card/{id}', 'CardsController@findById');

    Route::get('card/list/{list_id}', 'CardsController@findByListId');

    Route::put('card/{id}', 'CardsController@update');

    Route::delete('card/{id}', 'CardsController@delete');

    //RUTAS DE LAS ACTIVITIES DE LA CARD

    Route::post('/card_activity', 'CardActivityController@create');

    Route::get('/card_activity/{id}', 'CardActivityController@findById');

    Route::get('card_activity/card/{card_id}', 'CardActivityController@findByCardId');

    Route::put('card_activity/{id}', 'CardActivityController@update');

    Route::delete('card_activity/{id}', 'CardActivityController@delete');


});

Route::post('/register','AuthController@register');

Route::post('/login','AuthController@login');


//ruta email

Route::post('/sendEmail', 'UsersController@sendEmail');
