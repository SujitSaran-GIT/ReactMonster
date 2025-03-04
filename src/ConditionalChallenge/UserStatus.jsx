import Greeting from "./Greeting";

function CheckStatus({ isAdmin, isLoggedIn }) {
    return (
        <div>
            {isLoggedIn && isAdmin ? <Admin /> : <Authenticate />}
        </div>
    );
}

function UserStatus() {
    return (
        <>
            {/* Corrected missing isLoggedIn and isAdmin props */}
            <CheckStatus isAdmin={true} isLoggedIn={true} />
            <CheckStatus isAdmin={false} isLoggedIn={true} />
            {/* <CheckStatus isAdmin={true} isLoggedIn={false} /> */}
            <Greeting/>
        </>
    );
}

function Admin() {
    return <h5>Welcome Admin</h5>;
}

function Authenticate() {
    return <h5>Welcome User</h5>;
}

export default UserStatus;
