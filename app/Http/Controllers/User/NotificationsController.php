<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class NotificationsController extends Controller
{
	public function getNotificationsPage()
	{
		return view('pages.user.notifications');
    }

    public function markRead()
    {
        $user = Auth::user();
        $user->unreadNotifications->markAsRead();

        return response()
            ->json();
    }
}
