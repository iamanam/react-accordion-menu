# simple-react-accordion-menu

> A simple dynamically created accordion menu in react

[![NPM](https://img.shields.io/npm/v/react-accordion-menu.svg)](https://www.npmjs.com/package/react-accordion-menu) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm i simple-react-accordion-menu
```


![](https://github.com/iamanam/react-accordion-menu/blob/main/demo/accordion-menu-demo.gif)


## Usage

```jsx
import React, { Component } from 'react'

import { AccordionMenu } from 'simple-react-accordion-menu'

import 'simple-react-accordion-menu/dist/index.css'

class Example extends Component {
  render() {
    return (
      <AccordionMenu
        width='350px'
        subUlClassName='sub-ul'
        menuItems={MENUITEMS}
      />
    )
  }
}

/*
 ** Menu items should be an array of object
 ** Each object must have label and href field.
 ** Object can also have subMenuItems field which can also contain array of object
 ** Each object inside subMenuItems item can also have label,href and more subMenuItems array
 */

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
```

## Notice

This plugin is still on development. Create a new issue if you face any problem.

## License

MIT © [iamanam](https://github.com/iamanam)
