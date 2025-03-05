


function realDom(){
    const element = `
    <h2>RealDOM </h2>
    <p>${new Date().toLocaleTimeString()}</p>
    `;
    document.getElementById("real-dom").innerHTML = element;
}
setInterval(realDom, 1000);



const root = ReactDOM.createRoot(document.getElementById("virtual-dom"));
function virtualDom(){
    const element = React.createElement("div",{},
        React.createElement("h2",{},"VirtualDom"),
        React.createElement("p",{},new Date().toLocaleTimeString())
    );
    root.render(element);
}

setInterval(virtualDom, 1000);