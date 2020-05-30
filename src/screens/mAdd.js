import React from 'react';
import { firestore } from '../firebase';
import ReactDOM from 'react-dom';
import App from '../App';

class Add extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            price: '',
        };
    }

    render() {
        const { name, price } = this.state;
        return (
            <div className="a_main">
                <input type="text" className="name" id="name" value={name} onChange={this._valueChange} placeholder="name" />
                <input type="text" className="price" id="price" value={price} onChange={this._valueChange2} placeholder="price" />
                <div className="addbtn">
                    <input type="submit" value="add" onClick={() => this._test()} />
                </div>
            </div>
        );
    }

    _valueChange = (event) => {
        this.setState({
            name: event.target.value,
        });
    };

    _valueChange2 = (event) => {
        this.setState({
            price: event.target.value,
        });
    };

    _test = async () => {
        const { name, price } = this.state;

        console.log(name, price);

        try {
            await firestore.collection('order').add({
                name: name,
                price: price,
            });
        } catch (e) {
            console.log(e);
        } finally {
            window.location = '/';
        }
    };
}

export default Add;
