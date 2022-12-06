<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\StorePersonRequest;
use App\Http\Requests\UpdatePersonRequest;
use App\Models\Person;
use Illuminate\Http\Request;

class PersonController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $people = Person::all();
        return response()->json($people);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StorePersonRequest $request)
    {
        $person = new Person();
        $person->fill($request->all());
        $person->save();
        return response()->json($person, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $person = Person::find($id);
        if (is_null($person)) {
            return response()->json(["message" => "Not Found"], 404);
        }
        return response()->json($person);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdatePersonRequest $request, $id)
    {
        $person = Person::find($id);
        if (is_null($person)) {
            return response()->json(["message" => "Not Found"], 404);
        }
        $person->fill($request->all());
        $person->save();
        return response()->json($person);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $person = Person::find($id);
        if (is_null($person)) {
            return response()->json(["message" => "Not Found"], 404);
        }
        $person->delete();
        return response()->noContent();
    }
}
