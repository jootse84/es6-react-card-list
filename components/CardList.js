import React, { Component, PropTypes } from 'react'
import Card from './Card'
import '../styles/CardList.less'

export default class CardList extends Component {
    getCardDescription (cat) {
        return (
            <span>
                <p>
                    Value of quota is {cat.quota}
                </p>
                <p>Some text here</p>
            </span>
        );
    }

    getCategoryText (cat) {
        return (
            <div>
                ${cat.price}
                &nbsp;&nbsp;/&nbsp;&nbsp;
                <small>{cat.category == 1 ? 'Monthly' : 'Anual'}</small>
            </div>
        );
    }

    categoryClicked (cat) {
    }

    render () {
        return (
            <ul id="card_list">
                {this.props.cards.map((element, i) => {
                    return (
                        <Card
                            key={i}
                            card={element}
                            quotaName='Events'
                            quotaId='quota'
                            categoryClicked={this.categoryClicked}
                            getCategoryText={this.getCategoryText}
                            getCardDescription={this.getCardDescription}
                          />
                    );
                })}
            </ul>
        );
    }
}
