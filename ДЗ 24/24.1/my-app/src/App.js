import React from 'react';

const App = () => {
  return (
    <div className="sw-background min-vh-100 text-light">
      <div className="container mt-5">
        <header className="text-center mb-5">
          <h1 className="display-3 text-warning">Blocks</h1>
          <p className="lead">Select a block</p>
        </header>

        <div className="row g-4">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="col-md-3">
              <div className="card h-100 bg-dark border-secondary text-light">
                <div className="card-body text-center">
                  <h5 className="card-title text-warning">BLOCK</h5>
                  <p className="card-text small">lorem ipsum...</p>
                  <button className="btn btn-outline-warning btn-sm mt-2">More</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="d-flex justify-content-center mt-5">
          <nav>
            <ul className="pagination">
              <li className="page-item disabled"><a className="page-link bg-dark text-warning border-secondary" href="#">Previous</a></li>
              <li className="page-item"><a className="page-link bg-dark text-warning border-secondary" href="#">Next</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default App;