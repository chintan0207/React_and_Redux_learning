const h3 = <h3>Hello JSX</h3>

const root = ReactDOM.createRoot(document.getElementById('root'))
console.log(h3)
root.render(<Hello/>)

function Hello (){
    return (
        <>
        {h3}
        <p>Hi this is React Component</p>
        <p>Babel is a JavaScript compiler.</p>
        <button type="submit">click</button>
        </>
        )
}