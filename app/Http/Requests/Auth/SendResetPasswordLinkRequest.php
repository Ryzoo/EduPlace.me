<?php

namespace App\Http\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;

class SendResetPasswordLinkRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
			'email' => 'required|email|exists:users',
        ];
    }

	public function attributes()
	{
		return [
			'email' => __('Email'),
		];
	}
}
