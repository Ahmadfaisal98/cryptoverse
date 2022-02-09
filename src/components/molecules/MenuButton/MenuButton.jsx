import { MenuOutlined } from "@ant-design/icons"
import { Button } from "components/atoms"
import React from "react"

const MenuButton = ({ onClick }) => {
  return (
    <>
      <Button
        className="menu-button btn--blue"
        content={<MenuOutlined className="menu-button__content" />}
        onClick={onClick}
      />
    </>
  )
}

export default MenuButton
