import React from "react";
import Modal from '../UI Kit/modal'
import Form from "../Modals/form";

import GlobalStyles from "./global";
import '../../../node_modules/overlayscrollbars/styles/overlayscrollbars.min.css'  

const App = () => {
    return(
        <>
            <GlobalStyles />
            <Modal>
                <Form />
            </Modal>
        </>
    )
}

export default App
