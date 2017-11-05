<?php

namespace app\models;

use Yii;
use yii\base\Model;

class Contact extends Model
{

    public static function getContacts()
    {
        $contacts = [
            [
                'id'      => 'cheb',
                'city'    => 'Чебоксары',
                'offices' => [
                    [
                        'id'      => 'cheb-1',
                        'address' => 'Московский пр. 17, 6 этаж',
                        'phone'   => '(8352) 43-96-77'
                    ],
                    [
                        'id'      => 'cheb-2',
                        'address' => 'пр. Ленина 7, 3 этаж',
                        'phone'   => '(8352) 23-02-03'
                    ],
                    [
                        'id'      => 'cheb-3',
                        'address' => 'ул. Университетская 34, 2 этаж',
                        'phone'   => '(8352) 68-50-90'
                    ],
                    [
                        'id'      => 'cheb-4',
                        'address' => 'пр. 9 Пятилетки 19/37',
                        'phone'   => '(8352) 68-50-03'
                    ],
                    [
                        'id'      => 'cheb-5',
                        'address' => 'пр. М. Горького 12',
                        'phone'   => '(8352) 68-00-56'
                    ],
                    [
                        'id'      => 'cheb-6',
                        'address' => 'ул. Н. Смирнова 7',
                        'phone'   => '(8352) 68-03-45'
                    ],
                ]
            ],
            [
                'id'      => 'novcheb',
                'city'    => 'Новочебоксарск',
                'offices' => [
                    [
                        'id'      => 'novcheb-1',
                        'address' => 'ул. Пионерская 4/2',
                        'phone'   => '(8352) 68-00-52'
                    ]
                ]
            ]
        ];

        return Yii::$app->user->isGuest ? [] : $contacts;
    }
}