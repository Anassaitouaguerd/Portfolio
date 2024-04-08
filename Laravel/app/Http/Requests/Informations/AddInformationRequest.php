<?php

namespace App\Http\Requests\Informations;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class AddInformationRequest extends FormRequest
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
            "first_name" => "required|string",
            "Last_name" => "required|string",
            "image" => "required|image|mimes:png,jpg,jpeg",
            "email" => ["required", "email", Rule::unique('users', 'email')],
            "tel" => "required|min:10|max:16",
            "github" => "required|url",
            "gmail" => "required|url",
            "linkdin" => "required|url",
        ];
    }
}