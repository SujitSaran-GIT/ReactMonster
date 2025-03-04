import IconComponent from "./IconComponent"

function ProfileCard(){
    const styles = {
        backgroundColor : "lightgrey",
        padding : "15px",
        borderRadius : "8px",
        textColor : "black"
    }

    return (
        <>
        <div style={styles}>
            <h1>Style By Creating An Object</h1>
            <p>This is my object styling </p>
        </div>
        <IconComponent/>
        </>
    )
}

export default ProfileCard