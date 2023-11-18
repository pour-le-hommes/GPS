import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable from './DataTable';
// import PieChart from './PieChart';
import './styles.css';

import 'chart.js/auto';


const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios('http://localhost:3001/data');
        console.log(result.data);
        setData(result.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  const [selectedDeviceId, setSelectedDeviceId] = useState("D-1567"); // State to hold the selected device type
  const [currentTitle, setCurrentTitle] = useState('D-1567');
  const [currentType, setCurrentType] = useState('Aircraft');


  const handleDeviceIdClick = (device_id) => {
    setSelectedDeviceId(device_id);
    setCurrentTitle(`${device_id}`);
    const types = data
    .filter(item => item.device_id === device_id)
    .map(item => item.device_type);
    setCurrentType([...new Set(types)]);
  };

  const filteredData = selectedDeviceId
    ? data.filter((item) => item.device_id === selectedDeviceId)
    : data;

  return (
    <div>
      <h1>{currentTitle}/{currentType}</h1>
      <div>
        {Array.from(new Set(data.map(item => item.device_id))).map((device_id, index) => (
          <button key={index} onClick={() => handleDeviceIdClick(device_id)}>
            {device_id}
          </button>
        ))}
        <button onClick={() => setSelectedDeviceId(null)}>Show All</button>
      </div>
      <DataTable data={filteredData} />
    </div>
  );
};

export default App;