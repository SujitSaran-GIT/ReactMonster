function Footer(){
    const date = new Date()
    const currentYear = date.getFullYear()
    console.log(date.getFullYear())
    return(
        <>
        <footer>
            <p>@{currentYear} My Website</p>
        </footer>
        </>
    )
}
export default Footer