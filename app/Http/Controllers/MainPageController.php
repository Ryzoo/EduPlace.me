<?php

namespace App\Http\Controllers;

class MainPageController extends Controller
{
	public function getMainPage() {
		return view('pages.main');
	}
}
