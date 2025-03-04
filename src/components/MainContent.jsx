import Greeting from "../Greeting/Greeting"
import ProductInfo from "../Greeting/ProductInfo"
import Expression from "../material/Expression"
import Form from "./Form"
import Lists from "../material/Lists"

function MainContent(){

    return(
        <>
        <main>
            <h2>Main Content</h2>
            <p>This is my main Component</p>
        </main>
        <Form/>
        <Expression/>
        <Greeting/>
        <ProductInfo/>
        <Lists/>
        </>
    )
}
export default MainContent