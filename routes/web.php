<?php

use App\Http\Controllers\Auth\EmailVerificationController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\PasswordResetController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\SocialLoginController;
use App\Http\Controllers\LanguageController;
use App\Http\Controllers\MainPageController;
use App\Http\Controllers\User\SettingsController;
use Illuminate\Support\Facades\Route;

Route::get('/', [MainPageController::class, 'getMainPage'])->name('pages.main');
Route::get('/search', function () { return view('pages.search'); })->middleware(['auth'])->name('pages.search');
Route::get('/language/{code}', [LanguageController::class, 'setLanguage'])->name('language');

Route::prefix('user')->group(function () {
	Route::get('/settings', [SettingsController::class, 'getSettingsPage'])->middleware(['auth'])->name('pages.user.settings');
});

Route::prefix('auth')->group(function () {
	Route::get('/', [LoginController::class, 'logoutUser'])->middleware(['auth'])->name('pages.auth.logout');
	Route::prefix('login')->group(function () {
		Route::get('/', [LoginController::class, 'getLoginPage'])->middleware(['guest'])->name('login');
		Route::post('/', [LoginController::class, 'loginUser'])->middleware(['throttle:6,1']);
		Route::prefix('social')->group(function () {
			Route::get('{provider}', [SocialLoginController::class, 'redirectToProvider'])->middleware(['guest'])->name('pages.auth.social');
			Route::post('{provider}/callback', [SocialLoginController::class, 'handleProviderCallback'])->middleware(['throttle:6,1']);
		});
	});
	Route::prefix('register')->group(function () {
		Route::get('/', [RegisterController::class, 'getRegisterPage'])->middleware(['guest'])->name('pages.auth.register');
		Route::post('/', [RegisterController::class, 'registerNewUser'])->middleware(['throttle:6,1']);
	});
	Route::prefix('email')->group(function () {
		Route::get('/verify', [EmailVerificationController::class, 'getNotificationPage'])->middleware(['auth'])->name('verification.notice');
		Route::get('/verify/{id}/{hash}', [EmailVerificationController::class, 'getVerificationPage'])->middleware(['auth', 'signed'])->name('verification.verify');
		Route::post('/send-link', [EmailVerificationController::class, 'resendVerificationEmail'])->middleware(['auth', 'throttle:6,1'])->name('verification.send');
	});
	Route::prefix('password')->group(function () {
		Route::get('/forgot', [PasswordResetController::class, 'getForgotPasswordPage'])->middleware(['guest'])->name('password.request');
		Route::get('/reset/{token}', [PasswordResetController::class, 'getResetPasswordPage'])->middleware(['guest'])->name('password.reset');
		Route::post('/send-link',[PasswordResetController::class, 'sendResetPasswordLinkToUser'])->middleware(['guest'])->name('password.email');
		Route::post('/reset', [PasswordResetController::class, 'resetUserPassword'])->middleware(['guest'])->name('password.update');
	});
});


