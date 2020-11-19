<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\View;

class ShareDataMiddleware
{
    public function handle(Request $request, Closure $next)
    {
		View::share('sharedData', [
			'language' => App::getLocale(),
			'auth' => [
				'isLogged' => Auth::check(),
				'isVerified' => Auth::user() ? Auth::user()->hasVerifiedEmail() : false,
				'user' => Auth::user(),
			],
            'notifications' => [
                'list' => Auth::check() ? Auth::user()->notifications->take(10) : [],
                'unreadCount' => Auth::check() ? Auth::user()->unreadNotifications->count() : 0,
            ]
		]);

        return $next($request);
    }
}
