import React from "react";
import Modal from '../UI Kit/modal'
import Button from '../UI Kit/button'

import GlobalStyles from "./global";
import '../../../node_modules/overlayscrollbars/styles/overlayscrollbars.min.css'  

const App = () => {
    return(
        <>
            <GlobalStyles />
            <Modal>
            </Modal>
            <Button title='Заполнить свой прогресс'/>

        </>
    )
}

export default App
