<?php

namespace App\Http\Requests\Informations;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateInformationRequest extends FormRequest
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
            "first_name" => "string",
            "Last_name" => "string",
            "image" => "image|mimes:png,jpg,jpeg",
            "email" => ["email", Rule::unique('users', 'email')],
            "tel" => "min:10|max:16",
            "github" => "url",
            "gmail" => "url",
            "linkdin" => "url",
        ];
    }
}