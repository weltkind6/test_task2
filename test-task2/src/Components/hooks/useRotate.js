import React, {useState} from 'react'

function useRotate(initialValue) {

    const [rotateTab, setRotateTab] = useState(initialValue)
    const rotate = () => {
        setRotateTab(!rotateTab);
    }

    return [rotateTab, rotate]
}


export default useRotate
