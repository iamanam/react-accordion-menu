import React, { useEffect } from 'react'

/**
 * This is React functional component which creates simple accordion menu from a json object
 *
 * @export
 * @param {object} props AccordionMenu props
 * @params {string} props.width width of menu container
 * @params {string} props.subUlClassName classname of of ordered list inside another list
 * @params {array} props.menuItems array of menus
 * @params {function} props.CustomLinkGenerator a function to generate custom links
 * @return {*}
 */

export function AccordionMenu({
  width = '250px',
  subUlClassName = 'sub-ul',
  menuItems,
  CustomLinkGenerator
}) {
  /**
   * Create sub menu based on the menu items array passed
   * @param {Array} menuItems - Array of menus
   * @return {Array} Array of dynamically generated ul and li element
   */

  function createSubMenus(menuItems) {
    const subsLists = []
    for (const item of menuItems) {
      const { subMenuItems } = item
      let subMenus
      if (subMenuItems) {
        subMenus = createSubMenus(subMenuItems)
      }
      subsLists.push(createListContentDynamically(item, subMenus))
    }
    return subsLists
  }

  /**
   * This function creates required lists and unordered lists
   *
   * @param {*} { label, href } Label and href for anchor
   * @param {Array} subMenu - Array of submenus
   * @return {ReactElement} Return generated react elements
   */
  function createListContentDynamically({ label, href }, subMenu) {
    const Link = CustomLinkGenerator ? (
      <CustomLinkGenerator href={href} label={label} />
    ) : (
      <a href={href}>{label}</a>
    )

    return (
      <li key={label}>
        <div>
          {href ? Link : <p>{label}</p>}
          {subMenu && <button onClick={listBtnOnClick}>+</button>}
        </div>
        {subMenu && <ul className={subUlClassName}>{subMenu}</ul>}
      </li>
    )
  }

  /**
   * Handler for button click
   * It toggles classes and button text content
   * @param {Object} e Input Event object passed from click
   */
  function listBtnOnClick(e) {
    // change icon when list is close or opened
    e.target.textContent = e.target.textContent === '+' ? '-' : '+'
    const liItem = e.target.parentNode.parentNode
    // toggle class in list item
    liItem.classList.toggle('selected')
  }

  /**
   * This function gets specfic types of parent nodes of an element
   *
   * @param {Object} element - A dom elements which parents nodes need to get
   * @return {Array} Array of parents
   */

  function getParentNodesOfElement(element) {
    const parents = []

    if (element) {
      let currentEl = element
      while (currentEl) {
        if (
          currentEl?.tagName === 'UL' &&
          currentEl?.classList.contains(subUlClassName)
        ) {
          parents.unshift(currentEl)
        }
        currentEl = currentEl.parentNode
      }
    }
    return parents
  }

  /**
   * This function dynamically creates padding for required sub menu elemetns
   *
   */
  function padSubItems() {
    // get all children ul element of the top level ul
    const allChildrenUl = document.querySelectorAll('.' + subUlClassName)

    for (const singleUl of allChildrenUl) {
      const allParentNodes = getParentNodesOfElement(singleUl)
      const noOfUlParents = allParentNodes.length

      for (const li of allParentNodes.pop().children) {
        // first children of the li el is a div and we will pad that element
        li.children[0].style.paddingLeft = `${20 * noOfUlParents}px`
      }
    }
  }

  useEffect(() => {
    padSubItems()
  })

  return (
    <React.Fragment>
      <ul className='multi-level-menu' style={{ width: width }}>
        {menuItems.map((item, i) => {
          const { label, subMenuItems, href } = item
          const Link = CustomLinkGenerator ? (
            <CustomLinkGenerator href={href} label={label} />
          ) : (
            <a href={href}>{label}</a>
          )

          return (
            <li key={label}>
              <div>
                {href ? Link : <p>{label}</p>}
                {subMenuItems && <button onClick={listBtnOnClick}>+</button>}
              </div>

              {subMenuItems && (
                <ul className={subUlClassName}>
                  {createSubMenus(subMenuItems)}
                </ul>
              )}
            </li>
          )
        })}
      </ul>
    </React.Fragment>
  )
}
