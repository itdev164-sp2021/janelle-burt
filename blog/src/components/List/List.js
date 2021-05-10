import React from "react"
import PropTypes from "prop-types"
import { BaseContainer } from "../BaseContainer/"

const List = ({ children, ...rest }) => (
  <BaseContainer flex flexDirection="column" mx="auto" as="ul" {...rest}>
    {children}
  </BaseContainer>
)

export { List }

List.protoTypes = {
  children: PropTypes.node.isRequired,
}