<?php

use App\Http\Controllers\SearchController;
use Illuminate\Support\Facades\Route;


Route::prefix('search')->group(function () {
    Route::get('/{text}', [SearchController::class, 'search'])->name('action.search');
});