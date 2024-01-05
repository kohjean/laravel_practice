<?php

namespace App\Http\Requests\Tweet;

use Illuminate\Foundation\Http\FormRequest;

class CreateRequest extends FormRequest
{
    // ? 明示せずともauthorize, rules共に実行されている。なぜなのか
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
            // このtweetってどこに対応している？ -> bladeに書いている<form>から送られてくる値
            'tweet' => 'required|max:140'
        ];
    }

    public function tweet(): string
    {
        return $this->input('tweet');
    }
}
