<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SettingsController extends Controller
{
	public function getSettingsPage()
	{
		return view('pages.user.settings');
    }
}
