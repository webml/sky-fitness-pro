import React, { useEffect, useMemo } from "react";
import { createPortal } from "react-dom";

import * as S from './styles'

const Modal = ({children}) => {
    const root = document.querySelector('#modal')

    const element = useMemo(() => {
        return document.createElement('div')
    },[])
    
    useEffect(() => {
        root.appendChild(element)
        return () => {
            root.removeChild(element)
        }
    })

    return createPortal(
        <S.Modal>
            <S.ModalContent>
                {children}
            </S.ModalContent>
        </S.Modal>,
        element
    )
}

export default Modal