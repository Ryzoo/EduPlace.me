<?php

namespace App\Services;

use App\Models\Board;
use App\Models\Tag;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;

class SearchService
{
    public function findBoardsByText(string $text): Collection{
        if($this->validateText($text)){
            $boards = Board::search($text)->get();
            return $boards->load('likers');
        }

        return collect();
    }

    public function findTagsByText(string $text): Collection{
        if($this->validateText($text)){
            return Tag::search($text)
                ->get();
        }

        return collect();
    }

    private function validateText(string $text): bool{
        return Str::length($text) > 1;
    }
}
