<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "tbl_client_access".
 *
 * @property integer $id
 * @property integer $site
 * @property string $username
 * @property string $password
 * @property integer $calc_studname
 * @property string $date
 */
class Client extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'tbl_client_access';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['site', 'calc_studname'], 'integer'],
            [['username', 'password', 'calc_studname', 'date'], 'required'],
            [['username', 'password'], 'string'],
            [['date'], 'safe'],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => Yii::t('app', 'ID'),
            'site' => Yii::t('app', 'Site'),
            'username' => Yii::t('app', 'Username'),
            'password' => Yii::t('app', 'Password'),
            'calc_studname' => Yii::t('app', 'Calc Studname'),
            'date' => Yii::t('app', 'Date'),
        ];
    }

    /**
     * @param integer $id
     */
    public static function findUserById($id)
    {
        $user = (new \yii\db\Query())
        ->select('c.id as id, s.id as student_id, c.username as username, c.password as password, s.name as fullname, s.phone as phone, s.email as email, c.date as last_login_date')
        ->from('tbl_client_access c')
        ->innerJoin('calc_studname s', 'c.calc_studname=s.id')
        ->where('c.id=:id', [':id' => $id])
        ->one();
        return !empty($user) ? $user : NULL;
    }

    /**
     * @param string $username
     */
    public static function findUserByUsername($username)
    {
        $user = (new \yii\db\Query())
        ->select('c.id as id, s.id as student_id, c.username as username, c.password as password, s.name as fullname, s.phone as phone, s.email as email, c.date as last_login_date')
        ->from('tbl_client_access c')
        ->innerJoin('calc_studname s', 'c.calc_studname=s.id')
        ->where('c.username=:username', [':username' => $username])
        ->one();
        return !empty($user) ? $user : NULL;
    }
}
