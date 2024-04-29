import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { useAuth } from '../AdminAuth';
export default function WhatsappService() {
    const [url, setUrl] = useState();
    const [formData, setFormData] = useState({
        phone: '',
        message: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

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
        { field: 'phone', headerName: 'Phone Number', width: 250 },
        { field: 'email', headerName: 'E-mail', width: 350 },
    ];

    return (
        <div>
            <div style={{ height: '90%', width: '100%' }}>
                <DataGrid
                    rows={userDB}
                    columns={columns}
                    disableMultipleRowSelection={true}
                    onRowSelectionModelChange={(ids) => {
                        const selectedIDs = new Set(ids);
                        userDB.map(row => { if (selectedIDs.has(row.id)) { setFormData({ ...formData, phone: row.phone }) } });
                    }}
                    pageSize={5}
                    rowsPerPageOptions={[5, 10]}
                    checkboxSelection
                />
            </div>
            <div className="quick-message flex gap-2 pl-2">
                <button className='btn btn-outline-primary' onClick={() => { setFormData({ ...formData, message: "Hello Yo All Welcome To Our Website" }); }}>Welcome Message</button>
                <button className='btn btn-outline-primary' onClick={() => { setFormData({ ...formData, message: "Hello Don't Dare To Forget To Follow it?" }) }}>Reminder Message</button>
                <button className='btn btn-outline-primary' onClick={() => setFormData({ ...formData, message: "Hey Hey, I'm Still Here To Support You " })}>Daily Message</button>
                <button className='btn btn-outline-primary' onClick={() => setFormData({ ...formData, message: "Haw! Its Been A Week, You Didn't Visited Me" })}>Weekly Message</button>
                <button className='btn btn-outline-primary' onClick={() => setFormData({ ...formData, message: "Hola! Forgot Me?" })}>Monthly Message</button>
            </div>
            <div className='flex flex-col '>
                <input className='form-control m-3 w-[20vw]' type="phone" name='phone' value={formData.phone}
                    onChange={handleChange} placeholder="Phone Number Here" />
                <textarea className='form-control m-3' type="text" name='message' placeholder="Type Your Message Here" value={formData.message}
                    onChange={handleChange} />
                <div className="whatsapp" onClick={() => setUrl(`https://wa.me/${formData.phone}?text=${encodeURI(formData.message)}`)}>
                    <a href={url} target='_blank' className='ml-3 btn btn-outline-primary flex justify-center items-center h-[3rem] w-[8rem]'>
                        <WhatsAppIcon fontSize="large" />
                        <div className='text-lg ml-1 font-bold'>Send</div>
                    </a>
                </div>

            </div>
        </div>
    )
}
