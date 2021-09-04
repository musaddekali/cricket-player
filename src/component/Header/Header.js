import React from 'react';

function Header({headerPlayerCount}) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">CricketTeam</a>

                {/* show total select players number  */}
                <a href="#selected-players">
                    <button style={{ position: 'absolute', top: '9px', right: '80px' }} type="button" className="btn btn-primary">
                        Players
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            {headerPlayerCount}
                        </span>
                    </button>
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Team</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Field</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/" aria-disabled="true">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;
