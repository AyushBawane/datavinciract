import React, { useEffect, useState } from 'react'
import { Grid, FormControl, Autocomplete, TextField, TableContainer, Table, TableRow, TableHead, TableCell, TableBody, Paper } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';
import '../index.css'
import { ifError } from 'assert';

const TableComponent = () => {

    const [initDate, setInitDate] = useState<Dayjs | null>(null)
    const [endDate, setEndDate] = useState<Dayjs | null>(null)
    const [name, setName] = useState('')


    const FakeData: any = [
        {
            productId: "12",
            label: "Asus pavillion",
            productPrice: "1562",
            ProductDateCreated: "2023-06-14",
            TotalProduct: 294
        },
        {
            productId: "13",
            label: "Lenovo 14 pro max",
            productPrice: "8545",
            TotalProduct: 294,
            ProductDateCreated: "2023-06-15",
        },
        {
            productId: "14",
            label: "Macbook TUF F15",
            productPrice: "8654",
            TotalProduct: 78,
            ProductDateCreated: "2023-06-16",
        },
        {
            productId: "15",
            label: "Dell pixel 2",
            productPrice: "87456",
            TotalProduct: 878,
            ProductDateCreated: "2023-06-17",
        },
        {
            productId: "16",
            label: "MSI narzo 20",
            productPrice: "87456",
            TotalProduct: 878,
            ProductDateCreated: "2023-06-18",
        },
        {
            productId: "17",
            label: "Acer vivobook gaming",
            productPrice: "87456",
            TotalProduct: 878,
            ProductDateCreated: "2023-06-19",
        },
        {
            productId: "18",
            label: "Ayush ultra gaming plus",
            productPrice: "87456",
            TotalProduct: 878,
            ProductDateCreated: "2023-06-20",
        },
    ];

    const [resultData, setResultData] = useState<any[]>([])
    // console.log(resultData.length)

    // useEffect(() => {
    //     console.log(initDate?.toISOString())
    //     // if (initDate !== null) {
    //     //     console.log(new Date((new Date(initDate.toDate())).getDate() - 1))
    //     //     console.log((new Date(initDate.toDate())).getDate() - 1)
    //     // }
    // }, [initDate])

    useEffect(() => {

        if (initDate === null || endDate === null) {
            let result = [];
            for (let i = 0; i < FakeData.length; i++) {
                if (((FakeData[i].label).toUpperCase()).includes(name.toUpperCase())) {
                    result.push(FakeData[i])
                }
            }
            setResultData(result)
        }
        else if (initDate !== null || endDate !== null) {
            let filteredData: any = [];
            let init = new Date(initDate.toDate())

            let end = new Date(endDate.toDate())
            end.setDate(end.getDate() + 1)

            for (let i = 0; i < FakeData.length; i++) {

                let date = new Date(FakeData[i].ProductDateCreated);

                if (date >= init && date <= end) {
                    // console.log(date)
                    filteredData.push(FakeData[i])
                }
                else {
                    console.log('no match')
                }
            }
            let namesearh: any = []
            for (let i = 0; i < filteredData.length; i++) {
                if (((filteredData[i].label).toUpperCase()).includes(name.toUpperCase())) {
                    namesearh.push(filteredData[i])
                }
            }
            setResultData(namesearh);
        }



        // if (initDate !== null && endDate !== null) {

        //     if (resultData.length === 0) {
        //         setResultData(FakeData)
        //     }

        //     let filteredData: any = [];
        //     let init = new Date(initDate.toDate())

        //     let end = new Date(endDate.toDate())
        //     end.setDate(end.getDate() + 1)

        //     for (let i = 0; i < resultData.length; i++) {

        //         let date = new Date(resultData[i].ProductDateCreated);

        //         if (date >= init && date <= end) {
        //             console.log(date)
        //             filteredData.push(resultData[i])
        //         }
        //         else {
        //             console.log('no match')
        //         }
        //     }
        //     setResultData(filteredData);
        // }
        // else if (initDate === null && endDate === null && name === '') {
        //     setResultData(FakeData)
        // }

        // console.log(result)
        // setResultData(FakeData)
    }, [name, endDate, initDate])



    // useEffect(() => {
    //     if (name !== '') {
    //         let result = [];
    //         for (let i = 0; i < resultData.length; i++) {
    //             if (((resultData[i].label).toUpperCase()).includes(name.toUpperCase())) {
    //                 result.push(resultData[i])
    //             }
    //         }
    //         console.log(result)
    //         setResultData(result)
    //     }
    //     if (initDate === null && endDate === null) {
    //         let result = [];
    //         for (let i = 0; i < FakeData.length; i++) {
    //             if (((FakeData[i].label).toUpperCase()).includes(name.toUpperCase())) {
    //                 result.push(FakeData[i])
    //             }
    //         }
    //         // console.log(result)
    //         setResultData(result)

    //     }
    // }, [name, endDate, initDate])

    // function createData(
    //     name: string,
    //     calories: number,
    //     fat: number,
    //     carbs: number,
    //     protein: number,
    // ) {
    //     return { name, calories, fat, carbs, protein };
    // }

    // // const rows = [
    // //     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    // //     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    // //     createData('Eclair', 262, 16.0, 24, 6.0),
    // //     createData('Cupcake', 305, 3.7, 67, 4.3),
    // //     createData('Gingerbread', 356, 16.0, 49, 3.9),
    // // ];

    return (


        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div style={{
                padding: '20px',
                borderRadius: 10,
                border: '1px solid #ccc',
                marginBottom: 20
            }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <FormControl fullWidth >
                            <DatePicker
                                className='shadow'
                                label="From"
                                value={initDate}
                                onChange={(newValue: any) => setInitDate(newValue)}
                                format='DD-MM-YYYY'
                            />
                        </FormControl>
                    </Grid>
                    {/* <Grid item xs={0}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: '100%',
                            fontSize: '1.2rem',
                            fontWeight: 600
                        }}>To</div>
                    </Grid> */}
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <FormControl fullWidth style={{ border: 0 }}>
                            <DatePicker
                                className='shadow'
                                label="To"
                                value={endDate}
                                onChange={(newValue: any) => setEndDate(newValue)}
                                format='DD-MM-YYYY'
                            />
                        </FormControl>
                    </Grid>
                    {/* <Grid item xs={2}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                            <button className='btn'>Filter</button>
                        </div>
                    </Grid> */}
                    <Grid item xs={12} sm={12} md={4} lg={6}>
                        <FormControl fullWidth >
                            <TextField className='shadow' value={name} onChange={(e) => setName(e.target.value)} id="outlined-basic" label="Pro. Name" variant="outlined" />
                        </FormControl>
                    </Grid>
                </Grid>
            </div>
            <div style={{
                padding: '20px',
                borderRadius: 10,
                border: '1px solid #ccc'
            }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <div id='table'>
                            <TableContainer>
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell style={{ fontWeight: 'bold' }}>Pro. Id</TableCell>
                                            <TableCell style={{ fontWeight: 'bold' }}>Pro. Name</TableCell>
                                            <TableCell style={{ fontWeight: 'bold' }} align="right">Price</TableCell>
                                            <TableCell style={{ fontWeight: 'bold' }} align="right">Total Quantity</TableCell>
                                            <TableCell style={{ fontWeight: 'bold' }} align="right">Date Created</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {resultData && resultData.map((data: any) => (
                                            <TableRow
                                                key={data.productId}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row">{data.productId}</TableCell>
                                                <TableCell component="th" scope="row">{data.label}</TableCell>
                                                <TableCell align="right">{data.productPrice}</TableCell>
                                                <TableCell align="right">{data.TotalProduct}</TableCell>
                                                <TableCell align="right">{data.ProductDateCreated}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                                {(initDate && endDate && resultData.length == 0) && <div style={{ borderBottom: '1px solid #ddd', width: '100%' }}><div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 15, color: 'grey' }}>No data Between this range</div></div>}
                            </TableContainer>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </LocalizationProvider>
        // </div>
    )
}

export default TableComponent