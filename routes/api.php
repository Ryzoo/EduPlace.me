<?php

use App\Http\Controllers\SearchController;
use App\Http\Controllers\User\NotificationsController;
use Illuminate\Support\Facades\Route;


Route::prefix('search')->group(function () {
    Route::get('/{text}', [SearchController::class, 'search'])->name('action.search');
});

Route::put('/notifications/read', [NotificationsController::class, 'markRead'])->name('action.notifications.read');
