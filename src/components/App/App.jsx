import React from "react";
import Modal from '../UI Kit/modal'
import TrainingChoice from '../Modals/training-choice'

import GlobalStyles from "./global";
import '../../../node_modules/overlayscrollbars/styles/overlayscrollbars.min.css'  

const App = () => {
    return(
        <>
            <GlobalStyles />
            <Modal>
                <TrainingChoice />
            </Modal>
        </>
    )
}

export default App
