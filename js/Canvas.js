export default function Canvas(state) {

    const style = {
        backgroundColor: 'lightgray'
    }

    const canv = canvas({
        style,
        oncontextmenu,
        onmousemove,
        onmousedown,
        onmouseup,
        onmouseout
    });

    const c = state.context = canv.getContext('2d')

    let isMouseDown = false
    let oldX = 0
    let oldY = 0

    function oncontextmenu(e) {
        e.preventDefault()
        c.clearRect(0, 0, 300, 150)
    }

    function onmousemove(e) {
        if (!isMouseDown) return
        const x = e.offsetX
        const y = e.offsetY
        c.lineWidth = state.count
        c.lineTo(x, y)
        c.stroke()
        oldX = x
        oldY = y
    }

    function onmousedown(e) {
        oldX = e.offsetX
        oldY = e.offsetY
        c.beginPath()
        c.moveTo(oldX, oldY)
        isMouseDown = true
    }

    function onmouseup() {
        isMouseDown = false
    }

    function onmouseout() {
        isMouseDown = false
    }

    return canv
}
