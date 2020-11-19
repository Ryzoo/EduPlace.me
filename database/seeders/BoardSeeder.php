<?php

namespace Database\Seeders;

use App\Models\Board;
use Illuminate\Database\Seeder;

class BoardSeeder extends Seeder
{
    public function run()
    {
        Board::factory()
            ->times(10)
            ->create();
    }
}
