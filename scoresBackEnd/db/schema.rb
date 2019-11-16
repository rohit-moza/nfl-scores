# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_11_16_173823) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "nfl_stats", force: :cascade do |t|
    t.string "player", limit: 60
    t.string "team", limit: 3
    t.string "pos", limit: 2
    t.integer "att"
    t.float "att_g"
    t.integer "yds"
    t.float "avg"
    t.float "yds_g"
    t.integer "td"
    t.string "lng", limit: 3
    t.integer "first"
    t.float "first_percentage"
    t.integer "twenty_plus"
    t.integer "forty_plus"
    t.integer "fum"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
