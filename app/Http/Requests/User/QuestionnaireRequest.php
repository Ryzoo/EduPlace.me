<?php

namespace App\Http\Requests\User;

use App\Enums\User\ProfileEnum;
use Illuminate\Foundation\Http\FormRequest;
use Spatie\Enum\Laravel\Http\Requests\TransformsEnums;

class QuestionnaireRequest extends FormRequest
{
	use TransformsEnums;

    public function authorize()
    {
        return true;
    }

    public function rules()
    {
		$profileEnum = ProfileEnum::class;

        return [
			'profile' => "required|enum:{$profileEnum}",
			'interests' => 'required|array|min:1',
        ];
    }

	public function enums(): array
	{
		return [
			'profile' => ProfileEnum::class,
		];
	}
}
