<?php

namespace Tests\Feature\Auth;

use App\Notifications\Auth\EmailVerificationNotification;
use Illuminate\Support\Facades\Notification;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;

class RegistrationTest extends TestCase
{
	use WithFaker;

	public function test_userWithValidData_canRegister()
	{
		Notification::fake();
		Notification::assertNothingSent();

		$routeUrl = route('pages.auth.register');
		$searchUrl = route('pages.search');
		$name = $this->faker->name;
		$email = $this->faker->email;
		$password = $this->faker->password;
		$regulation = true;
		$rodo = true;

		$response = $this->post($routeUrl, [
			'name' => $name,
			'email' => $email,
			'password' => $password,
			'password_confirmation' => $password,
			'regulation_accept' => $regulation,
			'rodo_accept' => $rodo,
		]);

		$response->isRedirect($searchUrl);
		$response->assertSessionDoesntHaveErrors();

		Notification::assertTimesSent(1, EmailVerificationNotification::class);
	}
}
