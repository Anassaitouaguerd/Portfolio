<?php

namespace App\Http\Requests\Formations;

use Illuminate\Foundation\Http\FormRequest;

class AddFormationRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "name" => "required|string",
            "company" => "required|string",
            "lieu" => "required|string",
            "Date_start" => "required|date",
            "Date_end" => "required|date",
        ];
    }
}