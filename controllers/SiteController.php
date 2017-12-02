<?php

namespace app\controllers;

use Yii;
use yii\filters\AccessControl;
use yii\filters\VerbFilter;
use app\models\LoginForm;
use app\models\Contact;
use app\models\ContactForm;
use app\models\Navigation;
use app\models\User;
use yii\web\Controller;
use yii\web\Response;

class SiteController extends Controller
{
    /**
     * @inheritdoc
     */
    public function behaviors()
    {
        return [
            'access' => [
                'class' => AccessControl::className(),
                'only' => ['logout'],
                'rules' => [
                    [
                        'actions' => ['logout'],
                        'allow' => true,
                        'roles' => ['@'],
                    ],
                ],
            ],
            'verbs' => [
                'class' => VerbFilter::className(),
                'actions' => [
                    'login' => ['post'],
                    'logout' => ['post'],
                    'state' => ['post'],
                ],
            ],
        ];
    }

    /**
     * @inheritdoc
     */
    public function actions()
    {
        return [
            'error' => [
                'class' => 'yii\web\ErrorAction',
            ],
            'captcha' => [
                'class' => 'yii\captcha\CaptchaAction',
                'fixedVerifyCode' => YII_ENV_TEST ? 'testme' : null,
            ],
        ];
    }

    /**
     * Displays homepage.
     *
     * @return string
     */
    public function actionIndex()
    {
        return $this->render('index');
    }

    /**
     * Login action.
     *
     * @return Response|string
     */
    public function actionLogin()
    {
        $this->layout = false;
        Yii::$app->response->format = Response::FORMAT_JSON;
        if (Yii::$app->request->post('LoginForm')) {
            $data = Yii::$app->request->post('LoginForm');
            $model = new LoginForm();

            $model->username = $data['username'];
            $model->password = $data['password'];

            if ($model->login()) {
                return [
                    'result' => true,
                    'loggedIn' => true,
                    'profile' => [
                        'id'        => Yii::$app->user->identity->id,
                        'studentId' => Yii::$app->user->identity->student_id,
                        'username'  => Yii::$app->user->identity->username,
                        'fullname'  => Yii::$app->user->identity->fullname,
                        'phone'     => Yii::$app->user->identity->phone,
                        'email'     => Yii::$app->user->identity->email
                    ],
                    'navigation' => Navigation::getNavLinks(),
                    'contacts' => Contact::getContacts()
                ];
            } else {
                Yii::$app->response->statusCode = 400;
                return [
                    'result' => false,
                    'message' => 'Неправильный логин или пароль!'
                ];
            }
        } else {
            Yii::$app->response->statusCode = 400;
            return [
                'result' => false,
                'message' => Yii::t('yii', 'Missing required parameters: {LoginForm}!')
            ];
        }
    }

    /**
     * Logout action.
     *
     * @return Response
     */
    public function actionLogout()
    {
        $this->layout = false;
        Yii::$app->response->format = Response::FORMAT_JSON;

        if (Yii::$app->user->logout()) {
            return [
                'result' => true,
                'navigation' => Navigation::getNavLinks(),
                'message' => 'Успешный выход.'
            ];
        } else {
            return [
                'result' => false,
                'message' => 'Ошибка выхода.'
            ];
        }
    }

    public function actionState()
    {
        $this->layout = false;
        Yii::$app->response->format = Response::FORMAT_JSON;
        return [
            'result' => true,
            'loggedIn' => !Yii::$app->user->isGuest,
            'profile' => User::getUserData(),
            'contacts' => Contact::getContacts(),
            'navigation' => Navigation::getNavLinks(),
            'labels' => [
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
            ]
        ];
    }

    /**
     * Displays contact page.
     *
     * @return Response|string
     */
    public function actionContact()
    {
        $model = new ContactForm();
        if ($model->load(Yii::$app->request->post()) && $model->contact(Yii::$app->params['adminEmail'])) {
            Yii::$app->session->setFlash('contactFormSubmitted');

            return $this->refresh();
        }
        return $this->render('contact', [
            'model' => $model,
        ]);
    }

    /**
     * Displays about page.
     *
     * @return string
     */
    public function actionAbout()
    {
        return $this->render('about');
    }
}
