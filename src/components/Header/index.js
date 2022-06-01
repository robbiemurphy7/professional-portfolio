function Header(props) {
    const { currentPage, setCurrentPage } = props;

    return (

        <nav>
            <div>
                <h1>Coding</h1>
            </div>
            <div className="menu">
                <ul>
                    <li><button onClick={() => setCurrentPage("About")}>About</button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}