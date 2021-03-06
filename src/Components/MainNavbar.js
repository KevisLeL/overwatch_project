import React from 'react';
import {Link} from 'react-router-dom';

const MainHeader = (props) => {

  return (
      <React.Fragment>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link class="navbar-brand" to="/">
            Overwatch matches
          </Link>
          <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="/partidas">
                  Partidas <span class="sr-only">(current)</span>
                </a>
              </li>
            </ul>
            <Link type="button" class="btn btn-light" to="/">
              LOG OUT
            </Link>
          </div>
        </nav>


      </React.Fragment>
  );
};

export default MainHeader;
