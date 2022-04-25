import { AccordionMenu } from '../src/AccordionMenu'
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'

describe('Accordion Menu', () => {
  it('renders a accordin menu', () => {
    render(
      <AccordionMenu
        width='250px'
        subUlClassName='sub-ul'
        menuItems={MENUITEMS}
      />
    )
    // screen.debug();
    // check if all components are rendered
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Home').href).toBe('http://localhost/#')
    expect(screen.getByText('Samsung').href).toBe(
      'http://localhost/brand/samsung'
    )
    expect(screen.getByText('Laptop').parentElement.style['paddingLeft']).toBe(
      '20px'
    )
    expect(
      screen.getByText('SmartPhone').parentElement.style['paddingLeft']
    ).toBe('40px')
    expect(screen.getByText('Samsung').parentElement.style['paddingLeft']).toBe(
      '60px'
    )
    expect(screen.getByText('Mobile')).toBeInTheDocument()
  })
})

describe('Accordion Menu', () => {
  it('Accordion Menu styles generated perfectly', () => {
    render(
      <AccordionMenu
        width='250px'
        subUlClassName='sub-ul'
        menuItems={MENUITEMS}
      />
    )
    // screen.debug();

    expect(screen.getByText('Laptop').parentElement.style['paddingLeft']).toBe(
      '20px'
    )
    expect(
      screen.getByText('SmartPhone').parentElement.style['paddingLeft']
    ).toBe('40px')
    expect(screen.getByText('Samsung').parentElement.style['paddingLeft']).toBe(
      '60px'
    )
  })
})

describe('Accordion Menu', () => {
  it('Clicking expand sub menu', () => {
    render(
      <AccordionMenu
        width='250px'
        subUlClassName='sub-ul'
        menuItems={MENUITEMS}
      />
    )
    // screen.debug();
    expect(
      screen.getByText('SmartPhone').parentElement.children[1].textContent
    ).toBe('+')
    // console.log();
    // click btn to expaand sub menu
    fireEvent.click(screen.getByText('SmartPhone').parentElement.children[1])

    // screen.debug();
    // test icon changes when btn clicked
    expect(
      screen.getByText('SmartPhone').parentElement.children[1].textContent
    ).toBe('-')
    // after click the expand btn it's parent paretn will have selected className
    expect(
      screen.getByText('SmartPhone').parentElement.parentElement.className
    ).toBe('selected')
  })
})

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
                  { label: 'a', href: '#' },
                  { label: 'b', href: '#' }
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
