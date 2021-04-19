import React from 'react';
import FormatDate from '../Util/FormatDate';

export default function Account(props){
    let acc = props.account;
    let formatter = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'});
    let balance = formatter.format(acc.balance);

    return(
    <div>
        <ul>
            <li>Balance: {balance}</li>
            <li>Account Type: {acc.type}</li>
            <li>Account Number: {acc.acc_num}</li>
            <li>Created: {<FormatDate created={acc.created} />}</li>
        </ul>
        <br />
    </div>
    );
}