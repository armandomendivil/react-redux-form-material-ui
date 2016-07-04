import React from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn,
  TableRow, TableRowColumn } from 'material-ui/Table';

const TableSimple = (props) => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>Name</TableHeaderColumn>
        <TableHeaderColumn>Age</TableHeaderColumn>
        <TableHeaderColumn>Gender</TableHeaderColumn>
        <TableHeaderColumn>City</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      {props.data.map((row, index) => (
        <TableRow key={index} selected={row.selected}>
          <TableRowColumn>{row.name}</TableRowColumn>
          <TableRowColumn>{row.age}</TableRowColumn>
          <TableRowColumn>{row.gender}</TableRowColumn>
          <TableRowColumn>{row.city}</TableRowColumn>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

TableSimple.propTypes = {
  data: React.PropTypes.array.isRequired,
};

export default TableSimple;
