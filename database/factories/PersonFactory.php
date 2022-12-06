<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Person>
 */
class PersonFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        //$name = fake()->name();
        $name = fake()->lastName() . " " . fake()->firstName();
        //$email = strtolower($name) . fake()->freeEmailDomain();
        return [
            "name" => $name,
            "email" => fake()->email(),
            "address" => fake()->address(),
            "phone_number" => fake()->phoneNumber(),
            "birth_date" => fake()->dateTimeBetween("-50 years", "-20 years"),
        ];
    }
}
