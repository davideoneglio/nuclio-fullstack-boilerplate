<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use Illuminate\Support\Facades\Mail;

Route::get('/send', function () {

    $datos=[
        "titulo"=>"hola",
        "contenido"=>"hola"
    ];

    Mail::send("welcome", $datos, function ($mensaje){

        $mensaje->to("pepefaura19@gmail.com", "Pepe")->subject("prueba");

    }

    );
});

