import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



export default function CompanyDetails({ details, state }) {
    function createData(name, calories) {
        return { name, calories };
    }

    const rows = [
        createData('Country', details.country),
        createData('Currency of Country', details.currency),
        createData('Contact Number', details.phone),
        createData('Industry', details.finnhubIndustry),
        createData('Share Outstanding', details.shareOutstanding),
        createData('Market Capital', details.marketCapitalization),
        createData('Website', details.weburl),
    ];

    if (details.name === undefined) {
        return <></>
    }

    return (
        <div style={{ width: '60%', margin: 'auto', textAlign: 'center', padding: '2rem 0' }}>
            <div>
                <img src={details.logo} alt="Logo" />
            </div>
            <TableContainer component={Paper}>
                <Table size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Company Name</TableCell>
                            <TableCell align="right">{details.name}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.calories}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}