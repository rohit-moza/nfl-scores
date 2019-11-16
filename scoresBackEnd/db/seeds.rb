# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
nfl_stats = JSON.parse(File.read("rushing.json")) 
nfl_stats.each do |stat|
  NflStat.create(
    player: stat["Player"],
    team: stat["Team"],
    pos: stat["Pos"],
    att: stat["Att"],
    att_g: stat["Att/G"],
    yds: stat["Yds"],
    avg: stat["Avg"],
    yds_g: stat["Yds/G"],
    td: stat["TD"],
    lng: stat["Lng"],
    first: stat["1st"],
    first_percentage: stat["1st%"],
    twenty_plus: stat["20+"],
    forty_plus: stat["40+"],
    fum: stat["FUM"]
  )
end