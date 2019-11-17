### Understanding the problem
In this repo is the file [`rushing.json`](/rushing.json). It contains data about NFL players' rushing statistics. Each entry contains the following information
* `Player` (Player's name)
* `Team` (Player's team abreviation)
* `Pos` (Player's postion)
* `Att/G` (Rushing Attempts Per Game Average)
* `Att` (Rushing Attempts)
* `Yrds` (Total Rushing Yards)
* `Avg` (Rushing Average Yards Per Attempt)
* `Yds/G` (Rushing Yards Per Game)
* `TD` (Total Rushing Touchdowns)
* `Lng` (Longest Rush -- a `T` represents a touchdown occurred)
* `1st` (Rushing First Downs)
* `1st%` (Rushing First Down Percentage)
* `20+` (Rushing 20+ Yards Each)
* `40+` (Rushing 40+ Yards Each)
* `FUM` (Rushing Fumbles)

##### Requirements
1. Create a web app. This must be able to do the following steps
    1. Create a webpage which displays a table with the contents of `rushing.json`
    2. The user should be able to sort the players by _Total Rushing Yards_, _Longest Rush_ and _Total Rushing Touchdowns_
    3. The user should be able to filter by the player's name
    4. The user should be able to download the sorted/filtered data as a CSV

### Installation and running this solution

#### Stack/ versions
- `Rails 6.0.1`
- `Node 10.15.3`
- `Ruby 2.5.1`
- `React 16.12.0`

#### Set up instructions 
Setup the Rails App first, followed by the React App

##### 1. Setting up and running the backend Rails app
From the project root folder run the following:
- `cd scoresBackEnd`
- `bundle install`
- `rails db:setup`
- `rails s` 
Note: The Rails App runs on localhost:5000 

##### 2. Setting up and running the frontend React app 
In a new terminal, from the project root folder run the following:
- `cd frontend`
- `npm install` 
- `npm start`
Note: The React App runs on localhost:3000 

You can now interact with the app in your browser window. Please note: after searching for a player by name, you can clear the player name filter using the player search bar menu.   
