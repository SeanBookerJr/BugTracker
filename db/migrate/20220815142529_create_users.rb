class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :account_type
      t.integer :developer_id
      t.integer :manager_id
      t.integer :admin_id

      t.timestamps
    end
  end
end
