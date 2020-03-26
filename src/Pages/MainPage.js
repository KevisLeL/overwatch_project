import React from 'react';

import Users from '../Pages/Users';

const MainPage = () => {
    return (
      <React.Fragment>
        <div class="card bg-dark text-white" style={{width: 650, marginTop: 25, marginLeft: 300}}>
          <img
            src="https://2monkeysnetwork.com/wp-content/uploads/overwatch-logo-300x157.png"
            class="card-img"
            alt="Overwatch"
          />
          <div class="card-img-overlay">
            <h5 class="card-title">OVERWATCH</h5>
            <p class="card-text">
              This is the ultimate Overwatch app.
              Compiling all the competitive and non competitive matches you´ll play.
            </p>
            
          </div>
        </div>
        <div class="card">
  <div class="card-body">
  <Users />
  </div>
</div>


</React.Fragment>
    );
};

export default MainPage;
