class CreateComments < ActiveRecord::Migration[7.0]
  def change
    create_table :comments do |t|
      t.text :message
      t.integer :user_id
      t.integer :ticket_id
      t.integer :commentable_id
      t.string :commentable_type
      
      t.timestamps
    end
  end
end
