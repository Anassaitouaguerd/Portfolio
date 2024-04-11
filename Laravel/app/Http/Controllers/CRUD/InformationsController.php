<?php

namespace App\Http\Controllers\CRUD;

use App\Http\Controllers\Controller;
use App\Http\Requests\Informations\AddInformationRequest;
use App\Http\Requests\Informations\UpdateInformationRequest;
use App\Models\Information;
use Illuminate\Http\Request;

class InformationsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $AllInformations = Information::all();
        return response()->json($AllInformations, 200);
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
    public function store(AddInformationRequest $request)
    {
        Information::create($request->validated());
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
    public function update(UpdateInformationRequest $request, string $id)
    {
        Information::where('_id', $id)->update($request->validated());
        return response()->json([], 201);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Information::where('_id', $id)->delete();
        return response()->json([], 204);
    }
}
