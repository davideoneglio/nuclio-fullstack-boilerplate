<?php


namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class NewEmail extends Mailable
{
    use Queueable, SerializesModels;

    /*
    * Create a new message instance.
    *
    * @return void
    */

    public function __construct()
    {
       /* $this->data = $data; */
    }

    /*
    * Build the message.
    *
    * @return $this
    */

    public function build()
    {
        return $this->subject('Welcome email')->view('emails.newEmail');//->with(['data', $this->data]);
    }
}
