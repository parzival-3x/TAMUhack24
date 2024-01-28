import './Scheduler.css';
import {Link} from 'react-router-dom';

import { SubmitBtn } from './Elements';

import { BrowserRouter, Route } from 'react-router-dom';

import Datapage from '../Datapage';

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

              <SubmitBtn to="/datapage">
                Submit
              </SubmitBtn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Scheduler;
