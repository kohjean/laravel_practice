<?php

namespace App\Http\Controllers\Tweet;

use App\Http\Controllers\Controller;
use App\Http\Requests\Tweet\CreateRequest;
use App\Models\Tweet;
use Illuminate\Http\Request;

class CreateController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(CreateRequest $request)
    {
        $tweet = new Tweet;
        $tweet->user_id = $request->userId();
        $tweet->content = 'これは画面から追加した投稿です: '.$request->tweet();
        $tweet->save();

        return redirect()->route('tweet.index');
    }
}
