import React from 'react';
import Client from "./Client";

class ClientList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            clients: [],
            isLoaded: false
        }
    }

    componentDidMount(){
        fetch('http://localhost:5000/clients')
        .then(res => res.json())
        .then(
            (res) => {
                this.setState({
                    clients: res.clients,
                    isLoaded: true
                })
            },(error) => {
                    this.setState({
                    isLoaded: false,
                    error
                });
            }
        )
    }

    render(){
        let clientList = this.state.clients;
        return(
            <div id="clientList">
                {clientList.map((c, i) => (
                    <Client  key={i} client={c} />
                ))}
            </div>
        );
    }
}

export default ClientList;