import React from "react";
import {
    Link,
} from 'react-router-dom';
const NavBar = () => {
    return(
        <div className='main-nav'>
                <ul>
                    <li>
                      <Link 
                        to='/lions' 
                        onClick={this.navItem} 
                        id='lions'>Lions
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to='/tigers' 
                        onClick={this.navItem} 
                        id='lions'>
                      </Link>Tigers
                    </li>
                    <li>
                      <Link 
                        to='/bears' 
                        onClick={this.navItem} 
                        id='bears'>Bears
                      </Link>
                    </li>
                </ul>
            </div>
    ); 

}

export default NavBar;