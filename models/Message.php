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
        $result = [];
        $tmp_ads = (new \yii\db\Query())
        ->select('m.id as id, m.name as title, m.description as body, m.data as date, m.files as files')
        ->from('calc_message m')
        ->where('calc_messwhomtype=:twelve AND send=:one', [':twelve' => 12, ':one' => 1])
        ->orderby(['m.data' => SORT_DESC])
        ->limit(4)
        ->all();
        
        if (!empty($tmp_ads)) {
            $result['jumbotron'] = $tmp_ads[0];
            $result['jumbotron']['anounce'] = static::createAnounce($result['jumbotron']['body']);
            $result['jumbotron']['body'] = strip_tags($result['jumbotron']['body']);   
            $result['news'] = [];
            unset($tmp_ads[0]);
            foreach($tmp_ads as $a) {
                $tmp = $a;
                $tmp['anounce'] = static::createAnounce($tmp['body']);
                $tmp['body'] = strip_tags($tmp['body']);
                $result['news'][] = $tmp;
            }               
        }

        return $result;
    }

    protected static function createAnounce($text)
    {
        $anounce = '';
        if(preg_match('/<!--break-->.*$/isU', $text)){
            $anounce = preg_replace('/<!--break-->.*$/isU', '', $text);
            $anounce = strip_tags($anounce);
        } else {
            $anounce = strip_tags($text);
        }
        return $anounce;
    }
}
