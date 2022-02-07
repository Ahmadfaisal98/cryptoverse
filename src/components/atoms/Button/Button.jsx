import React from "react"
import { Button as AntButton } from "antd"

const Button = ({ content = "", className = "", shape = "", onClick }) => {
  return (
    <AntButton className={`btn ${className}`} shape={shape} onClick={onClick}>
      {content}
    </AntButton>
  )
}

export default Button
