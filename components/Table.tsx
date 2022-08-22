import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const TAX_RATE = 0.07;

function ccyFormat(num: number) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty: number, unit: number) {
  return qty * unit;
}

function createRow(desc: string, qty: number, unit: number) {
  const price = priceRow(qty, unit);
  return { desc, qty, unit, price };
}

interface Row {
  desc: string;
  qty: number;
  unit: number;
  price: number;
}

function subtotal(items: readonly Row[]) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
  createRow('Paperclips (Box)', 100, 1.15),
  createRow('Paper (Case)', 10, 45.99),
  createRow('Waste Basket', 2, 17.99),
];

const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;

export default function SpanningTable() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="a dense table">
                <TableBody>
                    <TableRow>
                        <TableCell width={'20%'}>공급위치</TableCell> 
                        <TableCell align="left" >Qtyㄴㅁㄴㅇ.</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell width={'20%'}>공급규모</TableCell> 
                        <TableCell align="left" >Qty.</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell width={'20%'}>입주자모집공고 관련 문의</TableCell> 
                        <TableCell align="left">Qty.</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell width={'20%'}>문의처</TableCell> 
                        <TableCell align="left">010-1234-5678</TableCell>
                    </TableRow>
          {/* {rows.map((row) => (
            <TableRow key={row.desc}>
              <TableCell>{row.desc}</TableCell>
              <TableCell align="right">{row.qty}</TableCell>
            </TableRow>
          ))} */}
          
        </TableBody>
      </Table>
    </TableContainer>
  );
}
