import React from "react"
import { Button as AntButton } from "antd"

const Button = ({ content, className = "", shape }) => {
  return (
    <AntButton className={`btn ${className}`} shape={shape}>
      {content}
    </AntButton>
  )
}

export default Button
