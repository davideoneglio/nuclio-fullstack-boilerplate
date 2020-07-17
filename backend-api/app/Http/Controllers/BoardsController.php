<?php


namespace App\Http\Controllers;


use App\Models\Board;
use Illuminate\Http\Response;
use Illuminate\Http\Request;

class BoardsController extends Controller
{
    public function create(Request $request)
    {
        $data = $request->all();

        $user = $this->getAuthenticatedUser();

        $board = Board::create([
            'title' => $data['title'],
            'user_id' => $user['id']
        ]);

        //$user->boards()->save($board);

        return response()->json($board);
    }

    public function findById($id)
    {
        $board = Board::where('id', $id)->first();

        return response()->json($board);
    }

    public function findAllBoardsForLoggedUser(Request $request)
    {
        $data = $request->all();

        $boards = Board::where('user_id', $data['board_id'])->get();

        return response()->json($boards);
    }

    public function update(Request $request, $id)
    {
        $board = Board::where('id', $id)->first();

        $dataFromTheBoardToUpdate = $request->all();

        $board->update($dataFromTheBoardToUpdate);

        return response()->json($board);
    }

    public function delete($id)
    {
        $board = Board::where('id', $id)->first();

        $board->delete();

        return response()->json("Board deleted!");
    }

}
