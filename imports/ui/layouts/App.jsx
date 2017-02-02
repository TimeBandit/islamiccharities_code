import React from 'react';
// import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
// css
import './App.less';

// components..
import NavMenu from '../components/NavMenu'
import SearchContainer from '../containers/SearchContainer';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    // fix menu when passed
    $(document)
      .ready(function() {
        // create sidebar and attach to menu open
        $('.ui.sidebar')
          .sidebar('attach events', '.toc.item');
      });
  }

  render() {
    return (
      <span>
        <div className="ui vertical basic segment menu-segment">
            <div className="ui container">
                <nav className="ui large inverted borderless menu">
                    <a className="active item">Home</a>
                    <a className="item">About</a>
                    <a className="item">Search</a>
                    <a className="item">Contact</a>
                    <a className="toc item mini-title">
                                Islamic Charity Book
                            </a>
                    <a className="toc right item">
                        <i className="white sidebar big icon"></i>
                    </a>
                </nav>
            </div>
        </div>
        {this.props.children}
        <div className="ui inverted vertical footer segment">
            <div className="ui container">
                <div className="ui stackable inverted divided equal height stackable grid">
                    <div className="three wide column">
                        <h4 className="ui inverted header">🌙</h4>
                        <div className="ui inverted link list">
                            <a href="#" className="item">Home</a>
                            <a href="#" className="item">About</a>
                            <a href="#" className="item">Search</a>
                            <a href="#" className="item">Contact</a>
                        </div>
                    </div>
                    <div className="three wide computer tablet only column">
                        <h4 className="ui inverted header">Advertise Here</h4>
                        <div className="ui inverted link list">
                            <a href="#" className="item">
                                <div className="ui small centered button test ad" data-text="Small Button"></div>
                            </a>
                        </div>
                    </div>
                    <div className="seven wide computer tablet only column">
                        <h4 className="ui inverted header">Footer Header</h4>
                        <div className="ui half centered banner test ad" data-text="Half Banner"></div>
                    </div>
                    <div className="three wide mobile only column">
                        <h4 className="ui inverted header">Advertise Here</h4>
                        <div className="ui inverted link list">
                            <a href="#" className="item">
                                <div className="ui mobile leaderboard test ad" data-text="Mobile Leaderboard"></div>
                            </a>
                        </div>
                    </div>
                    <div className="seven wide mobile only column">
                        <h4 className="ui inverted header">Footer Header</h4>
                        <div className="ui mobile leaderboard test ad" data-text="Mobile Leaderboard"></div>
                    </div>
                </div>
            </div>
        </div>
      </span>
    );
  }
};