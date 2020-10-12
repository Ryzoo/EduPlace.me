<?php

namespace App;

use App\Enums\User\InterestEnum;
use App\Enums\User\ProfileEnum;

class ProfileInterestsGenerator
{
	public function getProfilesWithInterests()
	{
		return [
			$this->createProfile(ProfileEnum::STUDENT()),
			$this->createProfile(ProfileEnum::TEACHER()),
			$this->createProfile(ProfileEnum::CREATOR()),
			$this->createProfile(ProfileEnum::COMPANY()),
			$this->createProfile(ProfileEnum::OTHER()),
		];
	}

	public function getInterestsTags(array $interests): array{
		$tags = [];
		foreach ($interests as $interest) {
			$interestTag = $this->getInterestTags(InterestEnum::make($interest));
			$tags = array_merge($tags, $interestTag);
		}
		return $tags;
	}

	private function createProfile(ProfileEnum $profile){
		$interests = $this->getProfileInterests($profile);
		$fullInterestsData = [];

		foreach ($interests as $interest){
			array_push($fullInterestsData, [
				'id' => $interest->value,
				'name' => __("profile.interest.{$interest->value}"),
			]);
		}

		return [
			'id' => $profile->value,
			'name' => __("profile.{$profile->value}"),
			'interests' => $fullInterestsData,
		];
	}

	private function getProfileInterests(ProfileEnum $profile): array{
		switch ($profile){
			case ProfileEnum::COMPANY():
				return [InterestEnum::DESIGN(), InterestEnum::DIY(), InterestEnum::EDUCATION(), InterestEnum::HEALTH()];
			case ProfileEnum::OTHER():
				return [InterestEnum::DESIGN()];
			case ProfileEnum::CREATOR():
				return [InterestEnum::DIY()];
			case ProfileEnum::STUDENT():
				return [InterestEnum::HEALTH()];
			case ProfileEnum::TEACHER():
				return [InterestEnum::EDUCATION()];
		}
		return [];
	}

	private function getInterestTags(InterestEnum $interest): array{
		switch ($interest){
			case InterestEnum::EDUCATION():
				return ['ołówek'];
			case InterestEnum::DESIGN():
				return ['layout'];
			case InterestEnum::DIY():
				return ['piła'];
			case InterestEnum::PHOTOGRAPHY():
				return ['aparat'];
			case InterestEnum::IT():
				return ['programowanie'];
			case InterestEnum::TRAVEL():
				return ['bus'];
			case InterestEnum::HEALTH():
				return ['sport'];
			case InterestEnum::GARDEN():
				return ['kwiatek'];
			case InterestEnum::FASHION():
				return ['ubranie'];
			case InterestEnum::SCIENCE():
				return ['badanie'];
			case InterestEnum::MANAGEMENT():
				return ['program'];
			case InterestEnum::TECHNOLOGY():
				return ['procesor'];
		}
		return [];
	}
}