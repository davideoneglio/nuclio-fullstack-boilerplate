<?php


namespace App\Http\Controllers;


use App\Models\CardActivity;
use Illuminate\Http\Request;

class CardActivityController
{
    public function create(Request $request)
    {
        $data = $request->all();

        $activity = new CardActivity([
            'text' => $data['text'],
            'card_id' => $data['card_id'],
        ]);

        return response()->json($activity);
    }

    public function findById($id)
    {
        $activity = CardActivity::where('id', $id)->first();

        return response()->json($activity);
    }

    //REVISAR SI TIENE SENTIDO
    public function findByCardId(Request $request)
    {
        $data = $request->all();

        $activities = CardActivity::where('card_id', $data['card_id'])->get();

        return response()->json($activities);
    }

    public function update(Request $request, $id)
    {
        $activity = CardActivity::where('id', $id)->first();

        $dataFromTheCardActivityToUpdate = $request->all();

        $activity->update($dataFromTheCardActivityToUpdate);

        return response()->json($activity);
    }

    public function delete($id)
    {
        $activity = CardActivity::where('id', $id)->first();

        $activity->delete();

        return response()->json("Activity deleted!");
    }
}
