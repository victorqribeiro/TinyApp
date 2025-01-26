export default function Input(state) {

    const inp = input({
        type: 'number', value: state.count, onchange
    })

    function update() {
        inp.value = state.count
    }

    function onchange() {
        state.count = parseInt(this.value)
    }

    state.addUpdate('count', update)

    return inp
}
