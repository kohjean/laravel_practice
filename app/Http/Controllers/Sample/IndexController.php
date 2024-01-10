<?php

namespace App\Http\Controllers\Sample;

use App\Http\Controllers\Controller;

class IndexController extends Controller
{
    public function show()
    {
        return 'Hello';
    }

    public function showId($id)
    {
        return "Hello {$id}";
    }
}
