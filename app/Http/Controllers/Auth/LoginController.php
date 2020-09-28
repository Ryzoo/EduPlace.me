<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Services\AuthService;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
	private AuthService $authService;

	public function __construct(AuthService $authService){
		$this->authService = $authService;
	}

	public function getLoginPage()
	{
		return view('pages.auth.login');
	}

	public function loginUser(LoginRequest $request)
	{
		$credentials = $request->only('email', 'password');

		if (Auth::attempt($credentials)) {
			return redirect()
				->route('pages.search');
		}

		return redirect()
			->route('pages.auth.login')
			->with('error', __('Email or password not match! Try again.'));
	}
}
