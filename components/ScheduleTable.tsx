import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import APTLttotPblancDetail from '../types/APTLttotPblancDetail';

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

export default function ScheduleTable({ ...props }) {
  const { HOUSE_SECD } : any = props;
  
  const aptTable = () => {
    const aptLttotPblancDetail: APTLttotPblancDetail = {
      ...props,
      TYPE: 'APT',
      HOUSE_MANAGE_NO: 0,
      PBLANC_NO: 0,
      HOUSE_NM: '',
      HOUSE_SECD: '',
      HOUSE_SECD_NM: '',
      HOUSE_DTL_SECD: '',
      HOUSE_DTL_SECD_NM: '',
      RENT_SECD: '',
      RENT_SECD_NM: '',
      SUBSCRPT_AREA_CODE: '',
      SUBSCRPT_AREA_CODE_NM: '',
      HSSPLY_ZIP: '',
      HSSPLY_ADRES: '',
      TOT_SUPLY_HSHLDCO: 0,
      RCRIT_PBLANC_DE: '',
      RCEPT_BGNDE: '',
      RCEPT_ENDDE: '',
      SPSPLY_RCEPT_BGNDE: '',
      SPSPLY_RCEPT_ENDDE: '',
      GNRL_RNK1_CRSPAREA_RCEPT_PD: '',
      GNRL_RNK1_ETC_GG_RCPTDE_PD: '',
      GNRL_RNK1_ETC_AREA_RCPTDE_PD: '',
      GNRL_RNK2_CRSPAREA_RCEPT_PD: '',
      GNRL_RNK2_ETC_GG_RCPTDE_PD: '',
      GNRL_RNK2_ETC_AREA_RCPTDE_PD: '',
      PRZWNER_PRESNATN_DE: '',
      CNTRCT_CNCLS_BGNDE: '',
      CNTRCT_CNCLS_ENDDE: '',
      HMPG_ADRES: '',
      CNSTRCT_ENTRPS_NM: '',
      MDHS_TELNO: '',
      BSNS_MBY_NM: '',
      MVN_PREARNGE_YM: '',
      SPECLT_RDN_EARTH_AT: '',
      MDAT_TRGET_AREA_SECD: '',
      PARCPRC_ULS_AT: '',
      IMPRMN_BSNS_AT: '',
      PUBLIC_HOUSE_EARTH_AT: '',
      LRSCL_BLDLND_AT: '',
      NPLN_PRVOPR_PUBLIC_HOUSE_AT: ''
    };
    aptLttotPblancDetail.GNRL_RNK1_CRSPAREA_RCEPT_PD;
  }

  console.log(props,"프롭");
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
