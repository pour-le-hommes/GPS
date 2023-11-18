import React from 'react';

const DataTable = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Timestamp</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.timestamp}</td>
            <td>{row.location}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
