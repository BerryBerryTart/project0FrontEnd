import {useParams} from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Account from '../Accounts/Account';

export default function ClientView(){
    let {id} = useParams();
    const [data, setData] = useState({});

    useEffect(() => {
        async function fetchData(){
            const res = await fetch('http://localhost:5000/clients/' + id);
            res
                .json()
                .then(res => setData(res))
        }
        fetchData();
    }, [id]);
    return(
        <div>
        <ul>
            <li>{data.fName} {data.lName}</li>
            <li>Joined: {data.joined}</li>
            {data.accounts && data.accounts.length > 0 && <li>Accounts:</li>}
            {data.accounts && data.accounts.map((acc, i) => <Account key={i} account={acc} />)}
        </ul>
        </div>
    );
}