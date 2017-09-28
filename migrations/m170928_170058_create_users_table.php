<?php

use yii\db\Migration;

/**
 * Handles the creation of table `users`.
 */
class m170928_170058_create_users_table extends Migration
{
    /**
     * @inheritdoc
     */
    public function up()
    {
        $this->createTable('users', [
            'id' => $this->primaryKey(),
            'fullname' => $this->string(255)->notNull(),
            'username' => $this->string(255)->notNull(),
            'password' => $this->string(255)->notNull(),
            'authKey' => $this->string(255)->notNull(),
            'accessToken' => $this->string(255)->notNull(),            
            'createdBy' => $this->integer(10)->notNull(),
            'createdAt' => $this->datetime(),
            'disabled' => $this->integer(1)->defaultValue(0),            
            'disabledAt' => $this->datetime(),
            'deleted' => $this->integer(1)->defaultValue(0),
            'deletedBy' => $this->integer(10),
            'deletedAt' => $this->datetime(),
        ]);
    }

    /**
     * @inheritdoc
     */
    public function down()
    {
        $this->dropTable('users');
    }
}
