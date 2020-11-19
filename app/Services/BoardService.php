<?php

namespace App\Services;

use App\Enums\User\ProfileEnum;
use App\Exceptions\System;
use App\Models\Board;
use App\Models\User;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\Hash;

class BoardService
{
    public function getRecentlyOpenedBoards(User $user){
        $boards = Board::all();
        return $boards->load('likers');
    }

    public function getRecommendedBoards(User $user){
        $boards = Board::all();
        return $boards->load('likers');
    }

    public function getBoardsOfUser(User $user){
        $boards = Board::all();
        return $boards->load('likers');
    }
}
