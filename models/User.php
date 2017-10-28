<?php

namespace app\models;

use Yii;
use app\models\Client;

class User extends \yii\base\Object implements \yii\web\IdentityInterface
{
    public $id;
    public $username;
    public $password;
    public $fullname;
    public $phone;
    public $email;
    public $student_id;
    public $authKey;
    public $accessToken;
    public $last_login_date;

    /**
     * @inheritdoc
     */
    public static function findIdentity($id)
    {
        if (($user = Client::findUserById($id)) !== NULL) {
            $user['authKey']     = NULL;
            $user['accessToken'] = NULL;
            return new static($user);
        } else {
            return NULL;
        }
    }

    /**
     * @inheritdoc
     */
    public static function findIdentityByAccessToken($token, $type = null)
    {
        // foreach (self::$users as $user) {
        //     if ($user['accessToken'] === $token) {
        //         return new static($user);
        //     }
        // }

        return null;
    }

    /**
     * Finds user by username
     *
     * @param string $username
     * @return static|null
     */
    public static function findByUsername($username)
    {
        if (($user = Client::findUserByUsername($username)) !== NULL) {            
            $user['authKey']     = NULL;
            $user['accessToken'] = NULL;
            return new static($user);
        } else {
            return NULL;
        }
    }

    /**
     * @inheritdoc
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @inheritdoc
     */
    public function getAuthKey()
    {
        return $this->authKey;
    }

    /**
     * @inheritdoc
     */
    public function validateAuthKey($authKey)
    {
        return $this->authKey === $authKey;
    }

    /**
     * Validates password
     *
     * @param string $password password to validate
     * @return bool if password provided is valid for current user
     */
    public function validatePassword($password)
    {
        return $this->password === $password;
    }

    public static function getUserData()
    {
        if (Yii::$app->user->isGuest) {
            return [
                'id' => 0,
                'username' => 'guest'
            ];
        } else {
            return [
                'id'        => Yii::$app->user->identity->id,
                'studentId' => Yii::$app->user->identity->student_id,
                'username'  => Yii::$app->user->identity->username,
                'fullname'  => Yii::$app->user->identity->fullname,
                'phone'     => Yii::$app->user->identity->phone,
                'email'     => Yii::$app->user->identity->email
            ];
        } 
    }
}
