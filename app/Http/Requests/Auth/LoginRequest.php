<?php

namespace App\Http\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;

class LoginRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
			'email' => 'required|email|exists:users',
			'password' => 'required|string|min:8',
			'remember' => 'sometimes|required',
        ];
    }

	public function attributes()
	{
		return [
			'email' => __('Email'),
			'password' => __('Password'),
		];
	}
}
