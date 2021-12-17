// import React from 'react'
// import {FaPizzaSlice} from 'react-icons/fa'

// export default function Header({ darkMode, setDarkMode }) {

//     return (
//        <header className="header" data-testid="header">
//            <nav>
//                <div className="logo">
//                     <img src="/images/logo.png" alt="Todoist" />
//                </div>
//                <div className="setting">
//                     <ul>
//                         <li>+</li>
//                         <li className="settings__darkmode">
//               <button
//                 data-testid="dark-mode-action"
//                 aria-label="Darkmode on/off"
//                 type="button"
//                 onClick={() => setDarkMode(!darkMode)}
//               >
//                 <FaPizzaSlice />
//               </button>
//             </li>
//                     </ul>
//                </div>
//            </nav>
//        </header>
//     )
// }
import React, { useState } from 'react';
import { FaPizzaSlice } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { setDarkMode } from '../../actions';
import AddTask from '../AddTask'
import { useDispatch } from 'react-redux';

export const Header = ({ darkMode }) => {

    const dispatch = useDispatch();
    return (
        <>

            <header className="header" data-testid="header">
                <nav>
                    <div className="logo">
                        <img src="/images/logo.png" alt="Todoist" />
                    </div>
                    <div className="settings">
                        <ul>
                            <li className="settings__add">

                                +

                            </li>
                            <li className="settings__darkmode">
                                <button
                                    data-testid="dark-mode-action"
                                    aria-label="Darkmode on/off"
                                    type="button"
                                    onClick={() => dispatch(setDarkMode(!darkMode))}
                                >
                                    <FaPizzaSlice />
                                </button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>


        </>
    )
};

