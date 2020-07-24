<?php


namespace App\Http\Controllers;

use App\Models\BoardList;
use Illuminate\Http\Request;

class ListsController extends Controller
{
    public function create(Request $request)
    {
        $data = $request->all();

        $list = new BoardList([
            'title' => $data['title'],
            'board_id' => $data['board_id'],
            'ordering' => $data['ordering']
        ]);

        return response()->json($list);
    }

    public function findById($id)
    {
        $list = BoardList::where('id', $id)->first();

        return response()->json($list);
    }

    //REVISAR SI TIENE SENTIDO
    public function findByBoardId(Request $request)
    {
        $data = $request->all();

        $lists = BoardList::where('board_id', $data['board_id'])->get();

        return response()->json($lists);
    }

    public function update(Request $request, $id)
    {
        $list = BoardList::where('id', $id)->first();

        $dataFromTheBoardListToUpdate = $request->all();

        $list->update($dataFromTheBoardListToUpdate);

        return response()->json($list);
    }

    public function delete($id)
    {
        $list = BoardList::where('id', $id)->first();

        $list->delete();

        return response()->json("List deleted!");
    }
}
