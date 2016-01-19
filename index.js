import React, { Component, PropTypes } from 'react'
import CardList from './components/CardList'
import 'babel-core/polyfill'
import { render } from 'react-dom'

var products = {
    "products": [
        {
            "month": {
                "category": 1,
                "created_at": 1450079651.0,
                "product_id": 1,
                "color_tag": "#63C6AE",
                "badge": "NEW!",
                "price": "5.95",
                "level": "STARTER",
                "updated_at": 1450079651.0,
                "currency": "usd",
                "quota": 100,
                "sale_tag": "Hot",
                "keep_rec_days": 30,
                "nickname": "New Product",
                "contract_period": 30,
                "desc": "event 100 / 1 month"
            }
        }, {
            "month": {
                "category": 1,
                "created_at": 1450079651.0,
                "product_id": 7,
                "color_tag": "#63C6AE",
                "badge": "",
                "price": "6.95",
                "level": "BASIC",
                "updated_at": 1450079651.0,
                "currency": "usd",
                "quota": 500,
                "sale_tag": "Hot",
                "keep_rec_days": 30,
                "nickname": "New Product",
                "contract_period": 30,
                "desc": "event 500 / 1 month"
            }
        }, {
            "month": {
                "category": 1,
                "created_at": 1450079652.0,
                "product_id": 13,
                "color_tag": "#63C6AE",
                "badge": "HOT!",
                "price": "7.95",
                "level": "PRO",
                "updated_at": 1450079652.0,
                "currency": "usd",
                "quota": 1000,
                "sale_tag": "Hot",
                "keep_rec_days": 30,
                "nickname": "New Product",
                "contract_period": 30,
                "desc": "event 1000 / 1 month"
            }
        }, {
            "month": {
                "category": 1,
                "created_at": 1450079652.0,
                "product_id": 19,
                "color_tag": "#63C6AE",
                "badge": "",
                "price": "10.95",
                "level": "ULTRA",
                "updated_at": 1450079652.0,
                "currency": "usd",
                "quota": 5000,
                "sale_tag": "Hot",
                "keep_rec_days": 30,
                "nickname": "New Product",
                "contract_period": 30,
                "desc": "event 5000 / 1 month"
            }
        }
    ]
};


class List extends Component {
    _dummy(params) {
        console.log('dummy')
    }

    render() {
        return (
            <CardList
                cards={products['products']} />
        )
    }
}

render(
  <List></List>,
  document.getElementById('root')
)
