import React from 'react';
import { firestore } from '../firebase';

class update extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: ``,
            name: '',
            price: '',
        };
    }
    componentDidMount() {
        this.setState({
            id: `${this.props.match.params.id}`,
        });
    }
    render() {
        const { name, price, id } = this.state;
        return (
            <div className="u_main">
                <div className="u_name">
                    <input type="text" value={name} onChange={this._valueChange} placeholder="change name" />
                </div>
                <div className="u_price">
                    <input type="text" value={price} onChange={this._valueChange2} placeholder="change price" />
                </div>
                <div className="u_btn">
                    <input type="submit" value="수정" onClick={() => this._update(id)} />
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
    _update = async (id) => {
        const { name, price } = this.state;

        try {
            await firestore.collection('order').doc(id).update({
                name: name,
                price: price,
            });
        } catch (error) {
            console.log(error);
        } finally {
            window.location = '/';
        }
    };
}

export default update;
