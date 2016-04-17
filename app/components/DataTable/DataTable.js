import React, { PropTypes } from 'react';

const DataTable = (props) => {
  const rows = props.data.map(row => (
    <tr>
      <td>{row.guest}</td>
      <td>{row.attending ? 'Yes' : 'No'}</td>
      <td>{row.adults}</td>
      <td>{row.children}</td>
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>
          <th>Guest</th>
          <th>Attending</th>
          <th>Adults</th>
          <th>Children</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  );
};

DataTable.propTypes = {
  data: PropTypes.object,
};

export default DataTable;
