<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class ChangePasswordRequest extends FormRequest
{
    public function authorize()
    {
		$user = Auth::user();
		$oldPassword = $this->route('old_password');

        return Auth::attempt([
			'email' => $user->email,
			'password' => $oldPassword,
		]);
    }

    public function rules()
    {
        return [
			'old_password' => 'required|string|min:8',
			'new_password' => 'required|string|min:8|confirmed',
        ];
    }

	public function attributes()
	{
		return [
			'old_password' => __('Old password'),
			'new_password' => __('New password'),
		];
	}
}
