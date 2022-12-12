import { useEffect } from 'react'
import { OverlayScrollbars } from 'overlayscrollbars'

const config = {}

const useScrollbar = (root) => {

    useEffect(() => {
        if(root.current){
            OverlayScrollbars(root.current, config)
        }
    },[root])
}

export { useScrollbar }