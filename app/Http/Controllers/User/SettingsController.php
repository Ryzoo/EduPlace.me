<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SettingsController extends Controller
{
	public function getGDPRPage()
	{
		return view('pages.user.settings.gdpr');
    }

	public function getPasswordChangePage()
	{
		return view('pages.user.settings.password');
	}

	public function getUserDataPage()
	{
		return view('pages.user.settings.data');
	}
}
