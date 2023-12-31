import {useEffect} from 'react'
import moleImg from './moleImg.png'

function Mole(props){
    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 8000)
        let timer = setTimeout(() => {
            props.toggle(false)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{'width': '13vw'}}
            src={moleImg}
            onClick={props.handleClick} />
        </div>
    )
}

export default Mole