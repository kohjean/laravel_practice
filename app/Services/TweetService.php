<?php

namespace App\Services;

use App\Models\Tweet;

class TweetService
{
    public function getTweets()
    {
        return Tweet::orderBy('created_at', 'DESC')->get();
    }

    public function getTweet(int $tweetId)
    {
        return Tweet::where('id', $tweetId)->first();
    }

    public function checkOwnTweet(int $userId, int $tweetId): bool
    {
        $tweet = Tweet::where('id', $tweetId)->first();
        if (!$tweet) {
            return false;
        }
        if ($tweet) {
            return $tweet->user_id === $userId;
        }
    }
}
