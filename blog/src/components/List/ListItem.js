import React from 'react'
import PropTypes from 'prop-types'
import { BaseContainer } from '../BaseContainer'

const ListItem = ({ children, ...rest}) => (
    <BaseContainer as='li' {...rest}>
        {children}
    </BaseContainer>
)

export { ListItem }

ListItem.protoTypes = {
    children: PropTypes.node.isRequired
}