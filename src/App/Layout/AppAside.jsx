import { NavLink } from 'react-router-dom';

import './styles/aside.css';
import { CalendarIcon } from '../Components/Icons/CalendarIcon';
import{HouseIcon}from'../Compoments/Icons/HouseIcon';
imprort{Edit/icon}from'../Compoments/Icons/HouseIcon';
improt {PerosnalCardIcon}from'../Compoments/Icons/PersonalCardIcon';
export function AppAside() {
  return (
    <aside>
      <nav>
        <ul>
          <li className="aside-row">
            <EditIcon>
            <NavLink to="dashboard">Dashboard</NavLink>
          </li>
          <li classNamea="aside-row">
            <NavLink to="blocks">Bloki</NavLink>
          </li>
          <li className="aside-row">
            <NavLink to="exercises">Ćwiczenia</NavLink>
          </li>
          
          <li className="aside-row">
            <NavLink to="cv">Moje CV</NavLink>
          </li>
          <li className="aside-row">
            <CalendarIcon />
            <NavLink to="calendar">Kalendarz</NavLink>
          </li>
        </ul>
      </nav>

      <p style={{ padding: '1rem 0' }}>Sidebar items, widgets, etc</p>
    </aside>
  );
}
