<?php

use App\Models\Profile;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProfilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('profiles', function (Blueprint $table) {
            $table->id();
			$table->string('name');
			$table->string('image')->default(Profile::DEFAULT_IMAGE);
			$table->integer('weight')->default(0);
            $table->timestamps();
        });

		Schema::create('interests_profile', function (Blueprint $table) {
			$table->bigInteger('profile_id');
			$table->bigInteger('interests_id');
		});
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('profiles');
    }
}
