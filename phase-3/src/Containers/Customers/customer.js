import React, { Component } from 'react';
import './customer.css';

class Customer extends React.Component {

    constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
			contacts: []
		}
    }
    
    componentDidMount() {
		this.fetchData();
    }
    
    fetchData() {

		fetch('https://jsonplaceholder.typicode.com/users')
			.then(res => res.json())
			.then(json => {
				this.setState({
					contacts: json
				})
			});
    }
    
    render() {
        const { isLoading, contacts } = this.state;
        return(
            (!isLoading) ?
                    <div className="loader">Loading....</div>
                    :
            <div className="customer common-content">
                <h1>Customers</h1>
                <div className="common-box">
                    <div className="row">
                        {contacts.length > 0 &&
                        contacts.map((item, key) => (
                        <div className="col-sm-6 col-md-4 repeater">
                                <div className="reapeater-list" key={key}>
                                    <div className="row">
                                        <div className="col-4">ID</div><div className="col-8"> : {item.id}</div>
                                    </div>
                                    <div className="row">
                                        <div className="col-4">Name</div><div className="col-8"> : {item.name}</div>
                                    </div>
                                    <div className="row">
                                        <div className="col-4">Email</div><div className="col-8"> : {item.email}</div>
                                    </div>
                                    <div className="row">
                                        <div className="col-4">Website</div><div className="col-8"> : {item.website}</div>
                                    </div>
                                    <div className="row">
                                        <div className="col-4">City</div><div className="col-8"> : {item.address.city}</div>
                                    </div>
                                </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Customer;