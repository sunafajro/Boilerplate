<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "calc_message".
 *
 * @property integer $id
 * @property integer $visible
 * @property integer $longmess
 * @property string $name
 * @property string $description
 * @property string $files
 * @property integer $user
 * @property string $data
 * @property integer $send
 * @property integer $calc_messwhomtype
 * @property string $refinement
 * @property integer $refinement_id
 */
class Message extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'calc_message';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['visible', 'longmess', 'name', 'description', 'files', 'user', 'data', 'send', 'calc_messwhomtype', 'refinement', 'refinement_id'], 'required'],
            [['visible', 'longmess', 'user', 'send', 'calc_messwhomtype', 'refinement_id'], 'integer'],
            [['name', 'description', 'files', 'refinement'], 'string'],
            [['data'], 'safe'],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'visible' => 'Visible',
            'longmess' => 'Longmess',
            'name' => 'Name',
            'description' => 'Description',
            'files' => 'Files',
            'user' => 'User',
            'data' => 'Data',
            'send' => 'Send',
            'calc_messwhomtype' => 'Calc Messwhomtype',
            'refinement' => 'Refinement',
            'refinement_id' => 'Refinement ID',
        ];
    }

    public static function getAds() {
        $ads = (new \yii\db\Query())
        ->select('m.id as id, m.name as title, m.description as body, m.data as date, m.files as fiels')
        ->from('calc_message m')
        ->where('calc_messwhomtype=:twelve AND send=:one', [':twelve' => 12, ':one' => 1])
        ->orderby(['m.data' => SORT_DESC])
        ->limit(5)
        ->all();

        return $ads;
    }
}
