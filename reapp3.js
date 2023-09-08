/* 
<div id='parent'>
    <div id='child'>
        <h1>I am h1 tag</h1>
        <h2>I am h2 tag</h2>  
    </div>
</div>
*/
//here we have siblings as well ,let's see how we'll use React to represent this
//if we'll have sibling we'll pass the 3rd argment in an array

const parent = React.createElement('div',{id:'parent'},
React.createElement('div',{id:'child'},
[React.createElement('h1',{},"i am an h1 tag"),
React.createElement('h2',{},'i am an h2 tag')]))

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parent)
//it will throw an error


//suppose we want to create a nested or more complex structure
/*<div id='parent'>
    <div id='child'>
        <h1>I am h1 tag</h1>
        <h2>I am h2 tag</h2>  
    </div>
</div>
<div id='parent2'>
    <div id='child2'>
        <h1>I am h1 tag</h1>
        <h2>I am h2 tag</h2>  
    </div>
</div>
*/
//then the react code will look more untidy, it will become more complex to type
//there is something known as JSX that to fix this problem