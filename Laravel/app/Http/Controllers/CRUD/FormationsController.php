<?php

namespace App\Http\Controllers\CRUD;

use App\Http\Controllers\Controller;
use App\Http\Requests\Formations\AddFormationRequest;
use App\Http\Requests\Formations\UpdateFormationRequest;
use App\Models\Formation;

class FormationsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $AllFormations = Formation::all();
        return response()->json($AllFormations, 200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(AddFormationRequest $request)
    {
        dd($request);
        Formation::create($request->validated());
        return response()->json(201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateFormationRequest $request, string $id)
    {
        Formation::where('_id', $id)->update($request->validated());
        return response()->json([], 201);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Formation::where('_id', $id)->delete();
        return response()->json([], 204);
    }
}