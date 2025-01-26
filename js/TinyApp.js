import './tiny.js'
import Button from './Button.js'
import Input from './Input.js'
import Canvas from './Canvas.js'

export default function TinyApp() {

    const state = createState({
        count: 0,
        context: null
    })

    const style = {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
    }

    return div(
        { style },
        div(Input(state), Button(state)),
        Canvas(state)
    )

}
