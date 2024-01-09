<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>つぶやきAPP</title>
</head>

<body>
    <h1>Edit Tweet</h1>
    @if (session('feedback.success'))
        <p style="color: green;">{{ session('feedback.success') }}</p>
    @endif
    <div>
        <a href="{{ route('tweet.index') }}">
            < 戻る</a>
                <p>編集Form</p>
                <form action="{{ route('tweet.update.put', ['tweetId' => $tweet->id]) }}" method="POST">
                    @method('PUT')
                    @csrf
                    <label>Tweet</label>
                    <span>140字まで</span>
                    <div>
                        <textarea id="tweet-content" type="text" name="tweet" placeholder="placeholder" rows="6" cols="80">
                            {{ $tweet->content }}
                        </textarea>
                    </div>
                    @error('tweet')
                        <p style="color: red;">{{ $message }}</p>
                    @enderror
                    <button type="submit">編集</button>
                </form>
    </div>
</body>

</html>
