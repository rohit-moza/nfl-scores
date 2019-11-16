class CreateNflStats < ActiveRecord::Migration[6.0]
  def change
    create_table :nfl_stats do |t|
      t.string :player, limit: 60
      t.string :team, limit: 3
      t.string :pos, limit: 2
      t.integer :att
      t.float :att_g 
      t.integer :yds 
      t.float :avg 
      t.float :yds_g
      t.integer :td 
      t.string :lng, limit: 3
      t.integer :first 
      t.float :first_percentage
      t.integer :twenty_plus 
      t.integer :forty_plus
      t.integer :fum
      t.timestamps
    end
  end
end
