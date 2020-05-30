import React from 'react';
import { firestore } from '../firebase';
import { Link } from 'react-router-dom';
import Circular from './lifescycle';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuList: [],
        };
    }

    componentDidMount() {
        const { menuList } = this.state;

        let data = [];
        try {
            firestore
                .collection('order')
                .get()
                .then((res) => {
                    res.forEach((doc) =>
                        data.push({
                            key: doc.id,
                            name: doc.data().name,
                            price: doc.data().price,
                        })
                    );

                    this.setState({
                        menuList: data,
                    });
                });
        } catch (e) {
            console.log(e);
        }
    }

    // =====================================================

    render() {
        const { menuList } = this.state;

        return (
            <div className="m_main">
                <div className="m_content">
                    {menuList.length === 0 ? (
                        <div>
                            <Circular />
                        </div>
                    ) : (
                        menuList.map((menu) => {
                            return (
                                <div key={menu.key}>
                                    <div>
                                        <input type="hidden" value={menu.key} name="id" />
                                    </div>
                                    <div className="m_all">
                                        <div className="m_c-name">이름 : {menu.name}</div>
                                        <div className="m_c-price">가격 : {menu.price}원</div>

                                        <div className="m_c-update">
                                            {/* <input type="button" value="수정" onClick={() => this._test()} /> */}
                                            <Link to={`/update/${menu.key}`}>수정</Link>
                                        </div>
                                        <div className="m_c-delete">
                                            <input type="button" value="삭제" onClick={() => this._delete(menu.key)} />
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    )}
                </div>
            </div>
        );
    }

    _delete = async (id) => {
        const { menuList } = this.state;

        console.log(id);

        try {
            await firestore.collection('order').doc(id).delete();
        } catch (e) {
            console.log(e);
        } finally {
            window.location = '/';
        }
    };
}

export default Main;
