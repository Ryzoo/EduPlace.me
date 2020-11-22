<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Auth;

class SearchBoardResultProjection extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'image' => $this->image,
            'slug' => $this->slug,
            'viewsCount' => $this->viewed,
            'likesCount' => count($this->likes),
            'likedByCurrentUser' => $this->likes->contains(static function ($value) {
                return $value->user_id === Auth::user()->id;
            }),
            'lastUpdate' => $this->updated_at->diffForHumans(),
        ];
    }
}
