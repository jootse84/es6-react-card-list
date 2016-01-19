import React, { Component, PropTypes } from 'react'
import '../styles/Card.less'

export default class Card extends Component {
    render() {
        const cat = this.props.card[Object.keys(this.props.card)[0]];

        return (
            <li className="card_box">
                <p id="banner">
                    <span className="badge">
                        {cat.badge}
                    </span>
                    <span id="level">
                        {cat.level}
                    </span>
                    <span id="circle">
                        <span>
                            {cat[this.props.quotaId]}
                        </span>
                        {this.props.quotaName}
                    </span>
                </p>
                {this.props.getCardDescription(cat)}
                <ul>
                    {Object.keys(this.props.card).map((catId, i) => {
                        var element = this.props.card[catId];
                        return (
                            <li key={i}>
                                <a
                                  onClick={this.props.categoryClicked.bind(this, element)} >
                                    {this.props.getCategoryText(element)}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </li>
        );
    }
}
