<?php

namespace App\Http\Controllers\Tweet\Update;

use App\Http\Controllers\Controller;
use App\Services\TweetService;
use Illuminate\Http\Request;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class indexController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request, TweetService $tweetService)
    {
        // Routeで定義した /{tweetId} がここで使える
        $tweetId = (int) $request->route('tweetId');
        $tweet = $tweetService->getTweet($tweetId);
        if (is_null($tweet)) {
            throw new NotFoundHttpException('そのTweetは存在しません');
        }

        return $tweet;
    }
}
