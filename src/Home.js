import React from "react";
import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
           
            <li>
              <Link to="/simplecounter" target="_self">
                Simple Counter
              </Link>
            </li>
            <li>
              <Link to="/usecontextcounter" target="_Self">
                UseContext Counter
              </Link>
            </li>
            <li>
              <Link to="/reduxcounter" target="_self">
                Redux Counter
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
export default Home;
 