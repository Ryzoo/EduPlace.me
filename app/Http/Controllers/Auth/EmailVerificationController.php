<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Http\Request;

class EmailVerificationController extends Controller
{
	public function getNotificationPage()
	{
		return redirect()->route('pages.auth.email-verification');
	}

    public function getVerificationPage(EmailVerificationRequest $request) {
		$request->fulfill();

		return redirect()
			->route('pages.search');
	}

	public function resendVerificationEmail (Request $request) {
		$request->user()->sendEmailVerificationNotification();

		return back()
			->with('status', __('Verification link send to your email!'));
	}
}