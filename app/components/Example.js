import React from 'react';
import { EXAMPLE_APP_MESSAGE } from './constant';
import './Example.css';

class Example extends React.Component {
    render() {
        return (
            <div>{EXAMPLE_APP_MESSAGE}</div>
        )
    }
}

export default Example;
