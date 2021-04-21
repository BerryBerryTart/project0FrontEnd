import React from 'react';
import FormatDate from '../Util/FormatDate';

function Client(props){
    let c = props.client;
    return(
    <div className="clientElement">
        <ul>
            <li><b>Name:</b> {c.fName} {c.lName}</li>
            <li><b>Joined:</b> {<FormatDate created={c.joined} />}</li>
            <a href={"/client/" + c.id}>More Details</a>
        </ul>
    </div>
    );
}

export default Client;