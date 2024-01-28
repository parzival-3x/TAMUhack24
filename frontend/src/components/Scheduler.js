import './Scheduler.css';

function Scheduler() {
  return (
    <div className="Scheduler">
      <div className="d-flex justify-content-center">
        <div id="scheduler-container">
          <div>
            <h1 id="scheduler-header">Secure your spot here</h1>
            <div id="input-container" className="d-flex justify-content-center">
              <input type="text" placeholder="Country, city, or airport" />
              <input type="text" placeholder="Country, city, or airport" />
              <input type="date" />
              <input type="date" />
              <input type="text" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Scheduler;
