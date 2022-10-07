import React from 'react'
import { useMatch, useParams } from 'react-router-dom';

export const withRouter = (Component) => {
    let RouterComponent = (props) => {
        const match = useMatch(':userId/');
        return <Component {...props} match={match}/>;
    }
    return RouterComponent;
}