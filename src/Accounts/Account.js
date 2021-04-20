import React from 'react';
import FormatDate from '../Util/FormatDate';

export default function Account(props){
    let acc = props.account;
    let formatter = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'});
    let balance = formatter.format(acc.balance);

    return(
    <div className="accountElement">
        <ul>
            <li><b>Balance:</b> {balance}</li>
            <li><b>Account Type:</b> {acc.type}</li>
            <li><b>Account Number:</b> {acc.acc_num}</li>
            <li><b>Created:</b> {<FormatDate created={acc.created} />}</li>
        </ul>
        <br />
    </div>
    );
}