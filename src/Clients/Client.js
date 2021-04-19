import React from 'react';
import FormatDate from '../Util/FormatDate';

function Client(props){
    let c = props.client;
    return(
    <div id="clientElement">
        <ul>
            <li>{c.fName} {c.lName}</li>
            <li>Joined: {<FormatDate created={c.joined} />}</li>
            <a href={"/clients/" + c.id}>More Details</a>
        </ul>
    </div>
    );
}

export default Client;