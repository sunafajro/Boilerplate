<?php

namespace app\controllers;

use Yii;
use yii\filters\VerbFilter;
use app\models\Message;
use yii\web\Controller;
use yii\web\Response;

class MessageController extends Controller
{
    /**
     * @inheritdoc
     */
    public function behaviors()
    {
        return [
            'verbs' => [
                'class' => VerbFilter::className(),
                'actions' => [
                    'get-ads' => ['post']
                ],
            ],
        ];
    }
 
    public function beforeAction($action)
    {
        if (Yii::$app->user->isGuest) {
            Yii::$app->response->statusCode = 401;
            return false;
        } else {
            return true;
        }
    }

    /* возвращает список последних новостей */
    public function actionGetAds()
    {
        $this->layout = false;
        Yii::$app->response->format = Response::FORMAT_JSON;
        $ads = Message::getAds();
        return [
            'result' => true,
            'jumbotron' => $ads['jumbotron'],
            'news' => $ads['news'],
        ];
    }
}