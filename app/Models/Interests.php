<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Interests extends Model
{
    use HasFactory;

	protected $guarded = [];

	public function profiles()
	{
		return $this->belongsToMany(Profile::class);
	}

	public function tags()
	{
		return $this->belongsToMany(Tag::class);
	}
}
