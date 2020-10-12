<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\ChangePasswordRequest;
use App\Http\Requests\User\ChangeProfileDataRequest;
use App\Services\UserService;
use Illuminate\Support\Facades\Auth;

class SettingsController extends Controller
{
	private UserService $userService;

	public function __construct(UserService $userService){
		$this->userService = $userService;
	}

	public function getGDPRPage()
	{
		return view('pages.user.settings.gdpr');
    }

	public function getPasswordChangePage()
	{
		return view('pages.user.settings.password');
	}

	public function getUserDataPage()
	{
		return view('pages.user.settings.data');
	}

	public function changeProfileData(ChangeProfileDataRequest $request)
	{
		$user = Auth::user();
		$newName = $request->get('name');
		$newEmail = $request->get('email');

		$this->userService->changeName($user, $newName);
		$this->userService->changeEmail($user, $newEmail);

		return back()
			->with('success', __('Your profile data changed successfully!'));
	}

	public function changePassword(ChangePasswordRequest $request)
	{
		$user = Auth::user();
		$newPassword = $request->get('new_password');

		$this->userService->changePassword($user, $newPassword);

		return redirect()
			->route('login')
			->with('success', __('Your password changed successfully!'));
	}

	public function deleteUserAccount()
	{
		$user = Auth::user();
		$this->userService->deleteAccount($user);

		return redirect()
			->route('pages.main')
			->with('success', __('Your account deleted successfully!'));
	}
}
