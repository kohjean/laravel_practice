<?php

declare(strict_types=1);

namespace Database\Seeders;

use App\Models\Tweet;
use Illuminate\Database\Seeder;

final class TweetsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Tweet::factory()->count(10)->create();
    }
}
