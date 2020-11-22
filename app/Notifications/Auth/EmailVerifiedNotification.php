<?php

namespace App\Notifications\Auth;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\BroadcastMessage;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\URL;

class EmailVerifiedNotification extends Notification implements ShouldQueue
{
    use Queueable;

    public function toArray($notifiable)
    {
        return [
            'message' => __('Your account is verified now!'),
        ];
    }

    public function via()
    {
        return ['broadcast', 'database'];
    }
}
