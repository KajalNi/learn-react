/* 
<div id='parent'>
    <div id='child'>
        <h1>I am h1 tag</h1>
    </div>
</div>
*/

const parent = React.createElement("div",{id:'parent'},// it is creating an object
React.createElement('div',{id:'child'},
React.createElement('h1',{},'i am h1 tag')))

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parent)//while it is rendering onto the  DOM , it converts itself
//into the html and puts it up onto the dom