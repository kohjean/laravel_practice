<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>つぶやきAPP</title>
</head>

<body>
    <h1>Laraval Sample App</h1>
    @if (session('feedback.success'))
        <p style="color: green;">{{ session('feedback.success') }}</p>
    @endif
    <div>
        <p>Form</p>
        <form action="{{ route('tweet.create') }}" method="POST">
            @csrf
            <label>Tweet</label>
            <span>140字まで</span>
            <textarea id="tweet-content" type="text" name="tweet" placeholder="placeholder"></textarea>
            @error('tweet')
                <p style="color: red;">{{ $message }}</p>
            @enderror
            <button type="submit">投稿</button>
        </form>
    </div>
    @foreach ($tweets as $tweet)
        <details>
            <summary>{{ $tweet->content }}</summary>
            <div>
                <a href="{{ route('tweet.update.index', ['tweetId' => $tweet->id]) }}">編集</a>
                <form action="{{ route('tweet.delete', ['tweetId' => $tweet->id]) }}" method="POST">
                    @method('DELETE')
                    @csrf
                    <button type="submit">削除</button>
                </form>
            </div>
        </details>
    @endforeach
</body>

</html>
