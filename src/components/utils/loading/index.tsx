
import { Overlay } from './style'
import LoadSpinner from './loadSpinner.gif'

export function Loading() {
    return (
        <Overlay>
            <img src={LoadSpinner} alt='' width={100} height={100} />
        </Overlay>
    )

}