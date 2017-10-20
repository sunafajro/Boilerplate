<?php

namespace app\models;

use Yii;
use yii\base\Model;

class Navigation extends Model
{

    public static function getNavLinks()
    {
        $links = [];

        if (Yii::$app->user->isGuest) {
            $links[] = ['id' => 'login', 'title' => 'Login', 'path' => '/login'];
        } else {
            $links[] = ['id' => 'home', 'title' => 'Home', 'path' => '/'];
            $links[] = ['id' => 'profile', 'title' => 'Profile', 'path' => '/profile'];
        }

        return $links;
    }
}