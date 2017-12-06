<?php

namespace app\models;

use Yii;
use yii\base\Model;

class Translation extends Model
{

    public static function getTranslations()
    {
        $labels = [];
        if (Yii::$app->user->isGuest) {
            $labels = [
                'navBarTitle' => [
                    'ru' => "Личный кабинет клиента",
                    'cv' => "Личный кабинет клиента"
                ],
                'homeBreadcrumbs' => [
                    'ru' => 'Главная',
                    'cv' => 'Главная'
                ],
                'loginBreadcrumbs' => [
                    'ru' => 'Вход',
                    'cv' => 'Вход'
                ],
                'loginPageTitle' => [
                    'ru' => 'Форма входа',
                    'cv' => 'Форма входа',
                ],
                'formEmptyFieldsAlert' => [
                    'ru' => 'Поля формы должны быть заполнены!',
                    'cv' => 'Поля формы должны быть заполнены!'
                ],
                'usernameLabel' => [
                    'ru' => 'Логин',
                    'cv' => 'Логин'
                ],
                'passwordLabel' => [
                    'ru' => 'Пароль',
                    'cv' => 'Пароль'
                ],
                'submitBtnLabel' => [
                    'ru' => 'Войти',
                    'cv' => 'Войти'
                ]
                ];
        } else {
            $labels = [
                'navBarTitle' => [
                    'ru' => "Личный кабинет клиента",
                    'cv' => "Личный кабинет клиента"
                ],
                'homeBreadcrumbs' => [
                    'ru' => 'Главная',
                    'cv' => 'Главная'
                ],
                'loginBreadcrumbs' => [
                    'ru' => 'Вход',
                    'cv' => 'Вход'
                ],
                'loginPageTitle' => [
                    'ru' => 'Форма входа',
                    'cv' => 'Форма входа',
                ],
                'formEmptyFieldsAlert' => [
                    'ru' => 'Поля формы должны быть заполнены!',
                    'cv' => 'Поля формы должны быть заполнены!'
                ],
                'usernameLabel' => [
                    'ru' => 'Логин',
                    'cv' => 'Логин'
                ],
                'passwordLabel' => [
                    'ru' => 'Пароль',
                    'cv' => 'Пароль'
                ],
                'submitBtnLabel' => [
                    'ru' => 'Войти',
                    'cv' => 'Войти'
                ]
            ];
        }

        return $labels;
    }
}