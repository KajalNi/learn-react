const heading = React.createElement("h1",{id:'heading', xyz:'abc'},"hello world from React")
console.log(heading)// this heading is storing an object and not a h1 tag
//place where we want to render our stuff
const root = ReactDOM.createRoot(document.getElementById('root'))
//now render the heading inside the root
root.render(heading)
//we can add css  with given attributes names 