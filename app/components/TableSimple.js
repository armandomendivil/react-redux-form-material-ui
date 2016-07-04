import React from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn,
  TableRow, TableRowColumn } from 'material-ui/Table';
import IconMenuSimple from './IconMenu';

const TableSimple = (props) => (
  <Table>
    <TableHeader>
      <TableRow>
        {props.headers.map((header, key) => (
          <TableHeaderColumn key={key}>{header.label}</TableHeaderColumn>
        ))}
        <TableHeaderColumn />
      </TableRow>
    </TableHeader>
    <TableBody>
      {props.data.map((row, index) => (
        <TableRow key={index} selected={row.selected}>
          {props.headers.map((h, k) => (
            <TableRowColumn key={k}>{row[h.value]}</TableRowColumn>
          ))}
          <TableRowColumn><IconMenuSimple id={row._id} /></TableRowColumn>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

TableSimple.propTypes = {
  data: React.PropTypes.array.isRequired,
  headers: React.PropTypes.array.isRequired,
};

export default TableSimple;
