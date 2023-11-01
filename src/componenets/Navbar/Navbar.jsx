import React, { Component} from 'react'
import './Navbar.css'
import {NavbarList} from './NavbarList'
import {Link} from 'react-router-dom'


export class Navbar extends Component {

  state = {clicked:false};

  handleChangeIcon = () => {
      this.setState({clicked : !this.state.clicked})
  }

  render() {
    return (
      <nav className='Navbar'>
        <h1 className="navbar-logo"> Trip Buddy </h1>

        <div className="menu-icons" onClick={this.handleChangeIcon}>
           <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        <ul className={this.state.clicked? "nav-menu active" : "nav-menu"}>
          {
            NavbarList.map((items, index)=>{
              return (
                <li>
                  <Link to={items.url} className={items.cName}>
                    <i className={items.icon}>  </i>
                    {items.title}
                  </Link>
              </li>
              )
            })
          }
          <button>Sign Up</button>
        </ul>

      </nav>
    )
  }
}

export default Navbar
