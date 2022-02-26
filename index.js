/*render parameter : 1st parameter is html code that we want to render
2nd parameter is the destination where we want to render our code */

// ReactDOM.render(element,document.getElementById("root"))



/* We can declare our html first and then use that variable in render function */

// const element = <h1 className="header">This is JSX</h1>
// ReactDOM.render(element,document.getElementById("root"))




/* If we console log out jsx element then result will be :
{
    type: "h1", 
    key: null, 
    ref: null, 
    props: {className: "header", children: "This is JSX"},
    _owner: null, 
    _store: {}
}
It is displaying javascript object. Props stands for "Properties"
*/




/*JSX can return only single parent element */
// ReactDOM.render(
//     <h1 className="header">This is JSX</h1><p>This is a paragraph</p>,   -> wrong format
//     document.getElementById("root")
// )

/*Correct format as h1 and p are wrapped into single parent div */
// ReactDOM.render(
//     <div>
//         <h1 className="header">This is JSX</h1>
//         <p>This is a paragraph</p>
//     </div>,
//     document.getElementById("root")
// )





/* using variable to store jsx */
const page = (
    <div>
        <h1 className="header">This is JSX</h1>
        <p>This is a paragraph</p>
    </div>
)
ReactDOM.render(
    page,
    document.getElementById("root")
)


/*If I console log page */
// {
//     type: "div", 
//     key: null, 
//     ref: null, 
//     props: {
//         children: [
//             {
//                 type: "h1", 
//                 key: null, 
//                 ref: null, 
//                 props: {className: "header", children: "This is JSX"}, 
//                 _owner: null, 
//                 _store: {}
//             }, 
//             {
//                 type: "p", 
//                 key: null, 
//                 ref: null, 
//                 props: {children: "This is a paragraph"}, 
//                 _owner: null, 
//                 _store: {}
//             }
//         ]
//     }, 
//     _owner: null,
//      _store: {}
// }