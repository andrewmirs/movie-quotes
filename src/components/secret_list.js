import React from 'react';
import auth from '../hoc/auth';

const SecretList = props => {

    return(
        <div>
            <h1 className="center">Secret Ops Que</h1>
            <ol>
                <li>Brad</li>
                <li>Kurt</li>
                <li>Jermaine</li>
                <li>Frank</li>
                <li>Miguel</li>
                <li>Rita</li>
                <li>Christina</li>
            </ol>
        </div>
    );
}
export default auth(SecretList);