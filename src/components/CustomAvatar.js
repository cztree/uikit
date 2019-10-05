import React, { Fragment } from 'react'
import { Avatar } from 'antd';

const CustomAvatar = () => (
  <Fragment>
      <Avatar className='custom-avatar' shape="square" size={100} icon="user" />
  </Fragment>
)

export default CustomAvatar