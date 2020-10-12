<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\QuestionnaireRequest;
use App\ProfileInterestsGenerator;
use App\Services\UserService;
use Illuminate\Support\Facades\Auth;

class QuestionnaireController extends Controller
{
	private UserService $userService;
	/**
	 * @var ProfileInterestsGenerator
	 */
	private ProfileInterestsGenerator $profileInterestsGenerator;

	public function __construct(UserService $userService, ProfileInterestsGenerator $profileInterestsGenerator){
		$this->userService = $userService;
		$this->profileInterestsGenerator = $profileInterestsGenerator;
	}

	public function getQuestionnairePage()
	{
		return view('pages.user.questionnaire', [
			'profiles' => $this->profileInterestsGenerator->getProfilesWithInterests(),
		]);
    }

	public function processQuestionnaire(QuestionnaireRequest $request)
	{
		$user = Auth::user();
		$profile = $request->get('profile');
		$interests = $request->get('interests');

		$tags = $this->profileInterestsGenerator->getInterestsTags($interests);
		$this->userService->makeReviewed($user, $profile, $tags);

		return redirect()
			->route('pages.main')
			->with('status', __('Questionnaire processed successfully!'));
    }
}
