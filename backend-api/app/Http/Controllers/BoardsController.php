<?php


namespace App\Http\Controllers;


use App\Models\Boards;
use http\Client\Response;
use Illuminate\Http\Request;

class BoardsController extends Controller
{
    public function create(Request $request) {
        $data = $request->all();

        $board = Boards::create([
            'title' => $data['title']
        ]);

        return response()->json($board);
    }

    public function findByTitle($title) {
        $board = Boards::where('title', $title)->first();

        return response()->json($board);
    }

    public function findAll() {
        $board = Boards::all();

        return response()->json($board);
    }

    public function update(Request $request, $title) {
        $board = Boards::where('title', $title)->first();
        $newData = $request->all();
        $board->update($newData);

        return response()->json($board);
    }

    public function delete($title) {
        $board = Boards::where('title', $title)->first();
        $board->delete();

        return response()->json("Board deleted!");
    }

}
