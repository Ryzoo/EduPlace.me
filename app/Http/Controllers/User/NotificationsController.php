<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;

class NotificationsController extends Controller
{
	public function getNotificationsPage()
	{
		return view('pages.user.notifications');
    }
}
