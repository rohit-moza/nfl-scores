import React, { useState, useEffect } from 'react'
import { Table } from 'antd'
import 'antd/dist/antd.css'


const columns = [
  {
    title: "Player Name",
    dataIndex: "player",
    key: "player",
    sortOrder: ['ascend', 'descend']
  }, 
  {
    title: "Team",
    dataIndex: "team",
    key: "team"
  },
  {
    title: "Pos",
    dataIndex: "pos",
    key: "pos"
  },
  {
    title: "Att/G",
    dataIndex: "att_g",
    key: "att_g"
  },
  {
    title: "Yrds",
    dataIndex: "yds",
    key: "yds"
  },
  {
    title: "Avg",
    dataIndex: "avg",
    key: "avg"
  },
  {
    title: "Yds/G",
    dataIndex: "yds_g",
    key: "yds_g"
  },
  {
    title: "TD",
    dataIndex: "td",
    key: "td"
  },
  {
    title: "Lng",
    dataIndex: "lng",
    key: "lng"
  },
  {
    title: "1st",
    dataIndex: "first",
    key: "first"
  },
  {
    title: "1st%",
    dataIndex: "first_percentage",
    key: "first_percentage"
  },
  {
    title: "20+",
    dataIndex: "twenty_plus",
    key: "twenty_plus"
  },
  {
    title: "40+",
    dataIndex: "forty_plus",
    key: "forty_plus"
  },
  {
    title: "Rushing Fumbles",
    dataIndex: "fum",
    key: "fum"
  }
]

const NflStats = () => {

  const [statsList, setStatsList] = useState([])

  useEffect(() => {
  fetch("http://localhost:5000/api/nfl_stats")
     .then(response => response.json())
     .then(data => setStatsList(data));
  }, [])
  
  return(
    <div>
      <Table columns={columns} dataSource={statsList} pagination={{ pageSize: 20 }}/>
    </div>
  )
}

export default NflStats