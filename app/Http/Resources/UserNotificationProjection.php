<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Carbon;

class UserNotificationProjection extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'message' => $this->data['message'],
            'isNew' => !isset($this->read_at),
            'created' => $this->created_at->diffForHumans(),
        ];
    }
}
