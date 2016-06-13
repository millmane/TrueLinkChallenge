class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :name, null: false
      t.datetime :start_date, null: false
      t.integer :recurrences, null: false
      t.datetime :delivery_date, null: false
      t.datetime :calculated_date, null: false

      t.timestamps null: false
    end

    add_index :events, :name
    add_index :events, :start_date
    add_index :events, :delivery_date
    add_index :events, :calculated_date
  end
end
