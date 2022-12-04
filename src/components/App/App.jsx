import React from "react";
import Modal from '../UI Kit/modal'
import InputProgress from "../Modals/input-progess";

import GlobalStyles from "./global";
import '../../../node_modules/overlayscrollbars/styles/overlayscrollbars.min.css'  

const App = () => {
    return(
        <>
            <GlobalStyles />
            <Modal>
                <InputProgress />
            </Modal>
        </>
    )
}

export default App
