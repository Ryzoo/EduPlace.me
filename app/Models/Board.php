<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;
use Overtrue\LaravelLike\Traits\Likeable;
use Spatie\Tags\HasTags;

class Board extends Model
{
    use HasFactory, Searchable, HasTags, Likeable;

    static string $DEFAULT_IMAGE = '/storage/boards/default.webp';

    protected $guarded = [];

    public static function getTagClassName(): string
    {
        return Tag::class;
    }

    public function toSearchableArray()
    {
        return [$this->name];
    }
}
