<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    use HasFactory;

    public const DEFAULT_IMAGE = 'storage/default/profile.webp';

	protected $guarded = [];

	public function interests()
	{
		return $this->belongsToMany(Interests::class);
	}
}
