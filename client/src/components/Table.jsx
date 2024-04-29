import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { useAuth } from '../AdminAuth';

export default function Table() {
    const [selectedIds, setSelectedIds] = useState([]);
    const [userDB, setUserDB] = useState([]);
    const { IsAdminLoggedIn } = useAuth();
    const fetchData = async () => {
        try {
            const response = await axios.get('https://htt-2-0-server.vercel.app/users');
            const usersWithIds = response.data.map((user, index) => ({ ...user, id: index + 1 }));
            console.log(response)
            setUserDB(usersWithIds);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        if (IsAdminLoggedIn) {
            fetchData();
        }
    }, [IsAdminLoggedIn]);

    const columns = [
        { field: 'id', headerName: 'Sr No.', width: 70 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'email', headerName: 'E-mail', width: 250 },
        { field: 'services', headerName: 'Services', width: 100 },
        { field: 'aboutUs', headerName: 'About Us', width: 100 },
        { field: 'nutritionStrategy', headerName: 'Nutition Strategy', width: 150 },
        { field: 'ayurveda', headerName: 'Ayurveda', width: 100 },
        { field: 'protein', headerName: 'Protein', width: 100 },
        { field: 'diet', headerName: 'Diet', width: 100 },
    ];

    
const handleDelete = async () => {
    try {
        await axios.delete('https://htt-2-0-server.vercel.app/users/delete', { data: selectedIds });
        console.log("Entries Deleted");
        fetchData();
    } catch (error) {
        console.log(error);
    }
};

return (
    <div style={{ height: '90%', width: '100%' }}>
        <DataGrid
            rows={userDB}
            columns={columns}

            selectionModel={selectedIds}
            onRowSelectionModelChange={(ids) => {
                const selectedIDs = new Set(ids);
                let selectedRowData = [];
                userDB.map(row => {if(selectedIDs.has(row.id)){selectedRowData.push(row._id)}});
                // const selectedRowData = userDB.filter((row) => {if () { return row._id}});
                console.log(selectedRowData)
                setSelectedIds(selectedRowData);
        }}
            pageSize={5}
            rowsPerPageOptions={[5, 10]}
            checkboxSelection
        />
        <button className='ml-3 btn btn-info' onClick={fetchData}>Refresh</button>
        <button className='absolute right-5 btn btn-danger' onClick={handleDelete}>Delete Selected</button>
    </div>
);
}
