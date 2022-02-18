

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">Disabled</a>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}

function MainContent() {
    return (<h1>I'm learning React!</h1>)
}

class header extends React.Component {
    render() {
        return <h2>I am a Car!</h2>;
    }
}

const h1 = document.createElement("h1")
h1.textContent = "I am a Car"
h1.className = "header"
// document.getElementById("root").append(h1)
console.log(h1)

// const element = <h1 className="header"></h1>
// ReactDOM.render(element, document.getElementById("root"))

// ReactDOM.render(
//     <div>
//         <Navbar />
//         <h1 />
//     </div>,
//     document.getElementById("root")
// )

const navigation = (<nav>
    <h1>ALZK</h1>
    <h3>Reasons I love React</h3>
    <ol>
        <li>Menu</li>
        <li>About</li>
        <li>Contact</li>
    </ol>
</nav>)

// ReactDOM.render(
//     // <div>
//     //     <h1 className="header">This is JSX</h1>
//     //     <p>This is a paragraph</p>
//     // </div>,
//     navigation,
//     document.getElementById("root")
// )

ReactDOM.render(navigation, document.getElementById("root"))