<?php

use App\Http\Controllers\Auth\EmailVerificationController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\PasswordResetController;
use App\Http\Controllers\Auth\RegisterController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('pages.main');
});

Route::get('/search', function () {
	return view('pages.search');
})->name('pages.search');

Route::prefix('auth')->group(function () {
	Route::prefix('login')->group(function () {
		Route::get('/', [LoginController::class, 'getLoginPage'])->middleware(['guest'])->name('pages.auth.login');
		Route::post('/', [LoginController::class, 'loginUser'])->middleware(['throttle:6,1']);
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


