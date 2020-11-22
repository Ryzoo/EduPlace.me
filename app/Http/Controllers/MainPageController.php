<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;

class MainPageController extends Controller
{
	public function getMainPage() {
		if(Auth::check()){
			return redirect()->route('pages.search');
		}

		return view('pages.main');
	}

    public function getCompanyPage() {
        return view('pages.company');
    }

    public function getEducationPage() {
        return view('pages.education');
    }
}
