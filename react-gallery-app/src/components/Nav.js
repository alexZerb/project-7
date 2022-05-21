import React from "react";
import {
    NavLink,
} from 'react-router-dom';
const Nav = () => {
    return(
        <div className='main-nav'>
                <ul>
                    <li>
                      <NavLink 
                        to='/lions' 
                        onClick={this.state.props.navItem} 
                        id='lions'>Lions
                      </NavLink>
                    </li>
                    <li>
                      <NavLink 
                        to='/tigers' 
                        onClick={this.props.navItem} 
                        id='lions'>
                      </NavLink>Tigers
                    </li>
                    <li>
                      <NavLink 
                        to='/bears' 
                        onClick={this.props.navItem} 
                        id='bears'>Bears
                      </NavLink>
                    </li>
                </ul>
            </div>
    ); 

}

export default NavLink(Nav);