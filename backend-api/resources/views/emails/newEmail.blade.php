@component('mail::message')

<h2>Dear {{$data}}, welcome to Trello!</h2>

@component('mail::button', ['url' => 'http://localhost:3000'])

    Visit Trello

@endcomponent

@endcomponent

