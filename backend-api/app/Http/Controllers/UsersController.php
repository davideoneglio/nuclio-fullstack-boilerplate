<?php


namespace App\Http\Controllers;


use App\Models\Users;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class UsersController extends Controller
{
    public function create(Request $request)
    {
        $data = $request->all();

        $user = Users::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => $data['password']
        ]);

        return response()->json($user);
    }

    public function findAll()
    {
        $users = Users::all();

        return response()->json($users);
    }

    public function findById($id)
    {
        $user = Users::where('id', $id)->first();

        return response()->json($user);
    }

}


