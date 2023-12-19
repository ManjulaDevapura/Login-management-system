import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
// import { connect } from "react-redux";

// import * as actionCreator from '../../actions/navigation_actions'
import { Translation } from 'react-i18next';
import SubMenu from '../components/SubMenu';

// const Navigation = () => {
class Navigation extends Component {

    state = {

    }

    render() {
        return (
            <Translation>
                {(t, { i18n }) =>
                    <ul className='sidebar navbar-nav'>
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/home">
                                <i className="fas fa-fw fa-tachometer-alt"></i>
                                <span>{t('Dashboard')}</span>
                            </NavLink>
                        </li>


                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/entrepreneur">
                                <i className="fas fa-fw fa-tachometer-alt"></i>
                                <span>{t('Entrepreneur')}</span>
                            </NavLink>
                        </li>

                        <li className="nav-item dropdown">
                            <NavLink to="/user" className="nav-link dropdown-toggle" id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-user-shield"></i>
                                <span>{t('Users')}</span>
                            </NavLink>
                            <div className="dropdown-menu" aria-labelledby="pagesDropdown">
                                <SubMenu
                                    subMenu1='/user/do' subMenuTitle1={'DO'}
                                    subMenu2='/user/epo' subMenuTitle2={'EPO'}
                                />
                            </div>
                        </li>                        
                    </ul>}
            </Translation>

        )
    }
}


export default Navigation
