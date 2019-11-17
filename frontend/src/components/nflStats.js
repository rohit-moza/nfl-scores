import React, { useState, useEffect } from 'react'
import { Table, Input, Button, Icon } from 'antd'
import 'antd/dist/antd.css'
import { CSVLink } from "react-csv"

const NflStats = () => {

  const [statsList, setStatsList] = useState([])
  const [searchText, setSearchText] = useState('')
  const [filteredData, setFilteredData] = useState([])

  useEffect(() => {
  fetch("http://localhost:5000/api/nfl_stats")
     .then(response => response.json())
     .then(data => setStatsList(data));
  }, [])

  
  const handleSearch = (selectedKeys, confirm) => {
    confirm()
    setSearchText(selectedKeys[0])
  }

  const handleReset = clearFilters => {
    clearFilters()
    setSearchText('')
  }

  let handleChange = (pagination: any, filters: any, sorter: any, extra: { currentDataSource: Array<any>[] }) => 
    setFilteredData(extra['currentDataSource'])

  let getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Button
          type="primary"
          onClick={() => handleSearch(selectedKeys, confirm)}
          icon="search"
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          Search
        </Button>
        <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
          Reset
        </Button>
      </div>
    ),
    filterIcon: filtered => (
      <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
})

const columns = [
  {
    title: "Player Name",
    dataIndex: "player",
    key: "player",
    ...getColumnSearchProps('player')
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
    title: "Total Rushing Yards",
    dataIndex: "yds",
    key: "yds",
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.yds - b.yds,
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
    title: "Total Rushing Touchdowns",
    dataIndex: "td",
    key: "td",
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.td - b.td,
  },
  {
    title: "Longest Rush",
    dataIndex: "lng",
    key: "lng", 
    defaultSortOrder: 'descend',
    sorter: (a, b) => parseInt(a.lng) - parseInt(b.lng),
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

const headers = [
  {
    label: "Player Name",
    key: "player",
  }, 
  {
    label: "Team",
    key: "team"
  },
  {
    label: "Pos",
    key: "pos"
  },
  {
    label: "Att/G",
    key: "att_g"
  },
  {
    label: "Total Rushing Yards",
    key: "yds",
  },
  {
    label: "Avg",
    key: "avg"
  },
  {
    label: "Yds/G",
    key: "yds_g"
  },
  {
    label: "Total Rushing Touchdowns",
    key: "td",
  },
  {
    label: "Longest Rush",
    key: "lng", 
  },
  {
    label: "1st",
    key: "first"
  },
  {
    label: "1st%",
    key: "first_percentage"
  },
  {
    label: "20+",
    key: "twenty_plus"
  },
  {
    label: "40+",
    key: "forty_plus"
  },
  {
    label: "Rushing Fumbles",
    key: "fum"
  }
]
  
  return(
    <div>
      <CSVLink filename={`nfl_stats_${Date.now()}.csv`} data={filteredData.length > 0 ? filteredData : statsList } headers={headers}>
        Download Me
      </CSVLink>
      <Table columns={columns} dataSource={statsList} pagination={{ pageSize: 20 }} onChange={handleChange}/>
    </div>
  )
}

export default NflStats