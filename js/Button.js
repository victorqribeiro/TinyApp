export default function Button(state) {

    const style = {
        color: 'black',
        border: 'solid 1px black'
    }

    function onclick() {
        state.count += 1
    }

    return button({ onclick, style }, '+ 1')
}
