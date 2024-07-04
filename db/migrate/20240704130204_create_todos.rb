class CreateTodos < ActiveRecord::Migration[6.0]
  def change
    create_table :todos do |t|
      t.string :title, null: false
      t.boolean :is_completed, default: false, null: false
      t.timestamps
    end
  end
end
