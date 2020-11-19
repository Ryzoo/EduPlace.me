<?php

namespace App\Models;

use Laravel\Scout\Searchable;

class Tag extends \Spatie\Tags\Tag
{
    use Searchable;

    public function toSearchableArray()
    {
        return [$this->name];
    }
}
