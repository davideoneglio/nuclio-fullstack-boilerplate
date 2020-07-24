<?php


namespace App\Http\Controllers;


use App\Models\BoardCard;
use Illuminate\Http\Request;

class CardsController extends Controller
{
    public function create(Request $request)
    {
        $data = $request->all();

        $card = new BoardCard([
            'list_id' => $data['list_id'],
            'description' => $data['description'],
            'ordering' => $data['ordering']
        ]);

        return response()->json($card);
    }

    public function findById($id)
    {
        $card = BoardCard::where('id', $id)->first();

        return response()->json($card);
    }

    public function findByListId(Request $request)
    {
        $data = $request->all();

        $cards = BoardCard::where('list_id', $data['list_id'])->get();

        return response()->json($cards);
    }

    public function update(Request $request, $id)
    {
        $card = BoardCard::where('id', $id)->first();

        $dataFromTheBoardCardToUpdate = $request->all();

        $card->update($dataFromTheBoardCardToUpdate);

        return response()->json($card);
    }

    public function delete($id)
    {
        $card = BoardCard::where('id', $id)->first();

        $card->delete();

        return response()->json("Card deleted!");
    }
}
