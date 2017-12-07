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
            $links = [
                'home' => [
                    'title' => [
                        'ru' => 'Личный кабинет',
                        'cv' => 'Личный кабинет'
                    ],
                    'path' => '/',
                    'icon' => 'home'
                ],
                'login' => [
                    'title' => [
                        'ru' => 'Вход',
                        'cv' => 'Вход'
                    ],
                    'path' => '/login',
                    'icon' => 'login'
                ]
            ];
        } else {
            $links = [
                'home' => [
                    'title' => [
                        'ru' => 'Личный кабинет',
                        'cv' => 'Личный кабинет'
                    ],
                    'path' => '/',
                    'icon' => 'home'
                ],
                'news' => [
                    'title' => [
                        'ru' => 'Новости',
                        'cv' => 'Новости'
                    ],
                    'path' => '/home',
                    'icon' => 'profile'
                ],
                'profile' => [
                    'title' => [
                        'ru' => 'Профиль',
                        'cv' => 'Профиль'
                    ],
                    'path' => '/profile',
                    'icon' => 'user'
                ],
                'logout' => [
                    'title' => [
                        'ru' => 'Выход',
                        'cv' => 'Выход'
                    ],
                    'path' => '/logout',
                    'icon' => 'logout'
                ]
            ];
        }
        return $links;
    }
}