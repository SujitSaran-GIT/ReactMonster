import React from 'react';
import Weather from '../ConditionalChallenge/Weather';

function ConditionalRendering({isValid}) {
    return (
        <div>
            {isValid ? <ValidPassword /> : <InvalidPassword />}
        </div>
    );
}

function PasswordProps() {
    return (
        <>
        <ConditionalRendering isValid={true} />
        <Weather/>
        </>
    );
}

function ValidPassword() {
    return (
        <h1>Password is correct</h1>
    );
}

function InvalidPassword() {
    return (
        <h1>Invalid Password Given</h1>
    );
}

export default PasswordProps;
