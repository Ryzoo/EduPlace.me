<?php

namespace App\Services;

use App\Enums\User\ProfileEnum;
use App\Exceptions\System;
use App\Models\User;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\Hash;

class UserService
{
	public function changePassword(User $user, string $newPassword)
	{
		$user->forceFill([
			'password' => Hash::make($newPassword),
		])->save();
	}

	public function changeName(User $user, string $newName)
	{
		if($user->name !== $newName){
			$user->forceFill([
				'name' => $newName,
			])->save();
		}
	}

	public function changeEmail(User $user, string $newEmail)
	{
		$user->forceFill([
			'email' => $newEmail,
			'email_verified_at' => $user->email !== $newEmail ? null : $user->email_verified_at,
		])->save();
	}

	public function deleteAccount(User $user)
	{
		try {
			$user->delete();
		} catch (\Exception $exception) {
			throw new System('We cannot delete your account. Contact to system administrator.');
		}
	}

	public function makeReviewed(User $user, ProfileEnum $profile, array $tags){
		$user->forceFill([
			'profile_type' => $profile,
			'reviewed_at' => Date::now(),
		])->save();

		$user->attachTags($tags);
	}
}
