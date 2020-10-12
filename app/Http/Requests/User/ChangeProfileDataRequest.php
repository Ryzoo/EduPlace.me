<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class ChangeProfileDataRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

	public function rules()
	{
		$user = Auth::user();
		return [
			'name' => 'required|string',
			'email' => "required|email|unique:users,email,{$user->id},id",
		];
	}

	public function attributes()
	{
		return [
			'name' => __('Name'),
			'email' => __('Email'),
		];
	}
}
