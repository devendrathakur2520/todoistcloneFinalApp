import React from 'react'
import {
    FaInbox,
    FaChevronDown,
    FaRegCalendar,
    FaCalendarAlt
} from 'react-icons/fa'

export const Sidebar = () => {
    return (
        <div className="sidebar" data-testid="sidebar">
            <ul className="sidebar__generi">
                <li>
                    <span>
                        <FaInbox />
                    </span>
                    <span>Indox</span>
                </li>
                <li>
                    <span>
                        <FaRegCalendar  />
                    </span>
                    <span>today</span>
                </li>
                <li>
                    <span>
                    <FaCalendarAlt />
                </span>
                    <span>Next 7 days</span>
                </li>
            </ul>
            <div className='sidebar__middle'>
                <span>
                    <FaChevronDown />
                </span>
                <h2>projects</h2>
            </div>
            <ul className="sidebar__projects">projects will be here!</ul>
            Add Project Component Here!!!!!!!!!!!!!!
        </div>
    )
}
