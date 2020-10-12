<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Session;

class LanguageMiddleware
{
    public function handle(Request $request, Closure $next)
    {
		$code = Session::get('languageCode');
		if($code){
			App::setLocale($code);
		}

		return $next($request);
    }
}
