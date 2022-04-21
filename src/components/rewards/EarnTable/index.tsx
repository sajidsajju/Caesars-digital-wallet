import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { StyledTableCell, StyledTableRow, circle, useStyles } from './style';
import {
  TIERCREDITS,
  REWARDCREDITS,
  TIERSTATUS,
  COMPS,
  SPENTONE,
  SPENTTHREE,
  SPENTFIVE,
  SPENTTEN,
} from '../../../config/configHandler';

function createData(name, Tier, Reward) {
  return { name, Tier, Reward };
}
function createData2(name, value) {
  return { name, value };
}

const rows = [
  createData('Hotel', 5, 1),
  createData('Dinning', 1, 1),
  createData('Shopping', 1, 1),
  createData('Amenities', 1, 1),
];

const rows1 = [createData('Racing', 1, 1), createData('Keno', 1, 1)];
const rows2 = [createData('Slots', 1, 1)];
const rows3 = [
  createData('Video Poker', 1, 1),
  createData('Sports', 1, 1),
  createData('Bingo', 1, 1),
];
const rows4 = [
  createData2('Table Games', 'Vary based on duration of play and average bet'),
];

const EarnTable = () => {
  const classes = useStyles();
  return (
    <>
      <p className={classes.font}>
        <strong>{TIERCREDITS}</strong> {TIERSTATUS}
      </p>
      <p className={classes.padding}>
        <strong>{REWARDCREDITS} </strong> {COMPS}
      </p>
      <Table>
        <TableBody>
          <TableRow>
            <StyledTableCell className={classes.tableWidth}></StyledTableCell>
            <StyledTableCell className="tiercreditcell">
              {TIERCREDITS}
            </StyledTableCell>
            <StyledTableCell className="rewardcreditcell">
              {REWARDCREDITS}
            </StyledTableCell>
          </TableRow>
        </TableBody>
      </Table>
      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              <StyledTableCell>{SPENTONE}</StyledTableCell>
            </TableRow>
          </TableHead>
        </Table>
        <div className={classes.eachrow}>
          <Table size="small" className="contentrow">
            <TableBody>
              {rows.map(row => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell className="rowcell">
                    <i className="fas fa-circle" style={circle} />
                  </StyledTableCell>
                  <StyledTableCell className={classes.title}>
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell className="tier">{row.Tier}</StyledTableCell>
                  <StyledTableCell className="reward">
                    {row.Reward}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <Table size="small">
          <TableHead>
            <TableRow>
              <StyledTableCell className="strong">{SPENTTHREE}</StyledTableCell>
            </TableRow>
          </TableHead>
        </Table>
        <div className={classes.eachrow}>
          <Table size="small" className="contentrow">
            <TableBody>
              {rows1.map(row => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell className="rowcell">
                    <i className="fas fa-circle" style={circle} />
                  </StyledTableCell>
                  <StyledTableCell className={classes.title}>
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell className="tier">{row.Tier}</StyledTableCell>
                  <StyledTableCell className="reward">
                    {row.Reward}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <Table size="small">
          <TableHead>
            <TableRow>
              <StyledTableCell className="strong">{SPENTFIVE}</StyledTableCell>
            </TableRow>
          </TableHead>
        </Table>
        <div className={classes.eachrow}>
          <Table size="small" className="contentrow">
            <TableBody>
              {rows2.map(row => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell className="rowcell">
                    <i className="fas fa-circle" style={circle} />
                  </StyledTableCell>
                  <StyledTableCell className={classes.title}>
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell className="tier">{row.Tier}</StyledTableCell>
                  <StyledTableCell className="reward">
                    {row.Reward}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <Table size="small">
          <TableHead>
            <TableRow>
              <StyledTableCell className="strong">{SPENTTEN}</StyledTableCell>
            </TableRow>
          </TableHead>
        </Table>
        <div className={classes.eachrow}>
          <Table size="small" className="contentrowborder">
            <TableBody>
              {rows3.map(row => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell className="rowcell">
                    <i className="fas fa-circle" style={circle} />
                  </StyledTableCell>
                  <StyledTableCell className={classes.title}>
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell className="tier">{row.Tier}</StyledTableCell>
                  <StyledTableCell className="reward">
                    {row.Reward}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className={classes.eachrow}>
          <Table>
            <TableBody>
              {rows4.map(row => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell className="rowcell">
                    <i className="fas fa-circle" style={circle} />
                  </StyledTableCell>
                  <StyledTableCell className={classes.tabStyle}>
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell className="rowvalue">
                    {row.value}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </TableContainer>
    </>
  );
};

export default EarnTable;
