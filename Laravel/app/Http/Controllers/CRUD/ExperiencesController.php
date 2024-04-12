<?php

namespace App\Http\Controllers\CRUD;

use App\Http\Controllers\Controller;
use App\Http\Requests\Experiences\AddExperienceRequest;
use App\Http\Requests\Experiences\UpdateExperienceRequest;
use App\Models\Experience;

class ExperiencesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $AllExperiences = Experience::all();
        return response()->json($AllExperiences, 200);
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
    public function store(AddExperienceRequest $request)
    {
        Experience::create($request->validated());
        return response()->json(["response", "created"], 201);
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
    public function update(UpdateExperienceRequest $request, string $id)
    {
        Experience::where('_id', $id)->update($request->validated());
        return response()->json([], 201);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Experience::where('_id', $id)->delete();
        return response()->json([], 204);
    }
}
