import React from 'react'
import { AccordionMenu } from 'simple-react-accordion-menu'

// import 'react-accordion-menu/dist/index.css'

const MENUITEMS = [
  {
    label: 'Home',
    href: '#'
  },
  {
    label: 'Shop',
    href: '#',
    subMenuItems: [
      {
        label: 'Mobile',
        href: '#',
        subMenuItems: [
          {
            label: 'SmartPhone',
            href: '#',
            subMenuItems: [
              { label: 'Apple', href: '#' },
              {
                label: 'Samsung',
                href: '/brand/samsung',
                subMenuItems: [
                  { label: 'Galaxy Series', href: '#' },
                  { label: 'Note Series', href: '#' }
                ]
              }
            ]
          },
          {
            label: 'Bar Phone',
            href: '#'
          }
        ]
      },
      { label: 'Laptop', href: '#' }
    ]
  }
]

const App = () => {
  return (
    <>
      <div id='accordion-menu'>
        <h1>Accordion Menu</h1>
        <AccordionMenu
          width='350px'
          subUlClassName='sub-ul'
          menuItems={MENUITEMS}
        />
      </div>
    </>
  )
}

export default App
