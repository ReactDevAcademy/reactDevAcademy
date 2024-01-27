import React from 'react'
import { NavLink } from 'react-router-dom'

const NavbarComp = () => {
  const NavbarContent = ["About", "Services", "Contact"]
  return (
    <>
        <ul className='ul mt-3 ms-2 me-2'>
          <NavLink to={'/'} className="Link Logo">ReactDevAcademy</NavLink>
          <NavLink to={'/'} className="Link">Home</NavLink>
          {NavbarContent.map((item, ind) => {
            return (
              <NavLink to={`/${item}`} className="Link">
                {item}
              </NavLink>
            )
          })}
        </ul>
    </>
  )
}

export default NavbarComp