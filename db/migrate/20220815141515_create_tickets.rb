class CreateTickets < ActiveRecord::Migration[7.0]
  def change
    create_table :tickets do |t|
      t.string :title
      t.string :type_of
      t.string :priority
      t.text :description
      t.string :status
      t.integer :user_id
      t.integer :project_id
      t.integer :developer_id

      t.timestamps
    end
  end
end
