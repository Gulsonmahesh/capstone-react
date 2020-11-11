import React, { Component } from 'react'
import LeftPane from './LeftPane';
import RightPane from './RightPane';

export default class Dashboard extends Component {
    render() {
        return (
            <div className="container p-0 mt-3">
                <div className="row">
                    <div className="col s12 m4 l3">
                        <LeftPane />
                    </div>
                    <div className="col s12 m8 l9">
                        <RightPane />
                    </div>
                </div>
            </div>
        )
    }
}
