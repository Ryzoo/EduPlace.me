<?php

namespace App\Http\Middleware;

use App\Http\Resources\UserNotificationProjection;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\View;

class ShareDataMiddleware
{
    public function handle(Request $request, Closure $next)
    {
        $user = null;
        $token = null;
        $isAuth = Auth::check();
        $lang = App::getLocale();

        if($isAuth){
            $user = Auth::user();
        }

		View::share('sharedData', [
			'language' => $lang,
			't' => json_decode(file_get_contents(base_path()."\\resources\\lang\\{$lang}.json")),
			'auth' => [
				'isLogged' => Auth::check(),
				'isVerified' => $isAuth ? $user->hasVerifiedEmail() : false,
				'user' => $user,
                'jwt' => $token,
			],
            'notifications' => [
                'list' => $isAuth ? UserNotificationProjection::collection($user->unreadNotifications) : [],
                'unreadCount' => $isAuth ? $user->unreadNotifications->count() : 0,
            ]
		]);

        return $next($request);
    }
}
