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
        <div  id="clientView">
        <h1>Account Overview</h1>
            <div className="clientElement">
                <ul>
                    <li><b>Name:</b> {data.fName} {data.lName}</li>
                    <li><b>Joined:</b> {data.joined}</li>
                </ul>
            </div>
            {data.accounts && data.accounts.length > 0 && <h2>Accounts:</h2>}
            {data.accounts && data.accounts.length > 0 && <hr />}
            <ul>
                <div id="accountContainer">
                    {data.accounts && data.accounts.map((acc, i) => <li><Account key={i} account={acc} /></li>)}
                </div>
            </ul>
        </div>
    );
}