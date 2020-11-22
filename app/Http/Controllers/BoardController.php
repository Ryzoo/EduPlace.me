<?php

namespace App\Http\Controllers;

use App\Models\Board;
use Illuminate\Support\Facades\Auth;

class BoardController extends Controller
{
    public function toggleBoardLike(Board $board)
    {
        Auth::user()->toggleLike($board);
    }
}
