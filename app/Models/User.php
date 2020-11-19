<?php

namespace App\Models;

use App\Enums\User\ProfileEnum;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Overtrue\LaravelLike\Traits\Liker;
use Spatie\Tags\HasTags;

class User extends Authenticatable implements MustVerifyEmail
{
    use HasFactory, Notifiable, HasTags, Liker;

    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
		'email_verified_at' => 'datetime',
		'reviewed_at' => 'datetime',
		'profile_type' => ProfileEnum::class.':nullable',
    ];

    public static function getTagClassName(): string
    {
        return Tag::class;
    }

	public function isReviewed():bool
	{
		return $this->reviewed_at !== null;
	}
}
