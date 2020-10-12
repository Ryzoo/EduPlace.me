<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserIsReviewedMiddleware
{
    public function handle(Request $request, Closure $next)
    {
    	$user = Auth::user();

    	if($user){
    		if($user->isReviewed())
			{
				return $next($request);
			}

			return redirect()
				->route('pages.user.questionnaire');
		}

    	return redirect()
			->route('login');
    }
}
