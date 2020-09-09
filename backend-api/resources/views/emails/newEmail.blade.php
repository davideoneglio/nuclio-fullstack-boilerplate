@component('mail::message')

<h2>Dear {{$data}}, welcome to Trello!</h2>

@component('mail::button', ['url' => 'http://localhost:3000/home'])

    Visit Trello

@endcomponent

@endcomponent

