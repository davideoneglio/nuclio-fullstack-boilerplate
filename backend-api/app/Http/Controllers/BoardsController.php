<?php


namespace App\Http\Controllers;


use App\Models\Board;
use Illuminate\Http\Response;
use Illuminate\Http\Request;

class BoardsController extends Controller
{
    public function create(Request $request)
    {
        $data = $request->only(["title"]);

        $user = $this->getAuthenticatedUser();

        $board = new Board($data);

        $user->boards()->save($board);

        return response()->json($board);
    }

    public function findById($id)
    {
        $user = $this->getAuthenticatedUser();

        $board = Board::where('id', $id)->where("user_id", $user->id)->first();

        if ($board === null) {
            $code = Response::HTTP_NOT_FOUND;
            return response()->json(["error" => "Board not accessible to this user"])->setStatusCode($code);
        }else{
            return response()->json($board);
        }
    }

    public function findAllBoardsForLoggedUser()
    {
        $user = $this->getAuthenticatedUser();

        //que es esto?
        $boards = $user->boards;

        return response()->json($boards);
    }

    public function update(Request $request, $id)
    {

        $user = $this->getAuthenticatedUser();

        $board = Board::where('id', $id)->where("user_id", $user->id)->first();

        if ($board === null) {
            $code = Response::HTTP_NOT_FOUND;
            return response()->json(["error" => "Acceso no permitido a este board"])->setStatusCode($code);
        }else{
            $dataFromTheBoardToUpdate = $request->all();

            $board->update($dataFromTheBoardToUpdate);

            return response()->json($board);
        }
    }

    public function delete($id)
    {
        $user = $this->getAuthenticatedUser();

        $board = Board::where('id', $id)->where("user_id", $user->id)->first();

        if ($board === null) {
            $code = Response::HTTP_NOT_FOUND;
            return response()->json(["error" => "Board not accessible to this user"])->setStatusCode($code);
        }else{
            $board->delete();

            return response()->json("Board deleted!");
        }
    }
}
