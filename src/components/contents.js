//FUNCTIONAL COMPONENT
//definition of component Content
function Content() {
    return (
        <div>
            <h1>Hello World!</h1>
            {/* showing current time */}
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    )
}
//exporting the Content
export default Content;