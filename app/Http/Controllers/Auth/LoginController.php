<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
	public function getLoginPage()
	{
		return view('pages.auth.login');
	}

	public function logoutUser()
	{
        Auth::user()->tokens()->delete();
        Auth::logout();
        session(['jwt' => null]);

		return redirect()
			->route('pages.main')
			->with('status', __('You are logout successfully!'));
	}

	public function loginUser(LoginRequest $request)
	{
		$credentials = $request->only('email', 'password');
		$isRemember = $request->has('remember') && boolval($request->get('remember'));

		if (Auth::attempt($credentials, $isRemember)) {
            $token = Auth::user()->createToken(Auth::user()->email);
            session(['jwt' => $token->plainTextToken]);

			return redirect()
				->route('pages.search')
				->with('status', __('You are logged successfully!'));
		}

		return redirect()
			->route('login')
			->with('error', __('Email or password not match! Try again.'));
	}
}
