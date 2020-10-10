<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\QuestionnaireRequest;
use App\Models\Profile;
use Illuminate\Http\Request;

class QuestionnaireController extends Controller
{
	public function getQuestionnairePage()
	{
		return view('pages.user.questionnaire', [
			'profiles' => Profile::with('interests')->get()
		]);
    }

	public function processQuestionnaire(QuestionnaireRequest $request)
	{
		return true;
    }
}
