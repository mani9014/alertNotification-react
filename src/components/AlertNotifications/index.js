// Write your code here
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'

import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'

import './index.css'

const AlertNotifications = () => (
  <div className="bg-container">
    <h1 className="heading">Alert Notifications</h1>
    <Notification>
      <AiFillCheckCircle className="success-icon" />
      <div>
        <h1 className="success-head not-heading">Success</h1>
        <p className="description">
          You can access all the files in the folder
        </p>
      </div>
    </Notification>

    <Notification>
      <RiErrorWarningFill className="error-icon" />
      <div className="des-container">
        <h1 className="error-head not-heading">Error</h1>
        <p className="description">
          Sorry, you are not authorized to have access to delete the file
        </p>
      </div>
    </Notification>

    <Notification>
      <MdWarning className="warning-icon" />
      <div className="des-container">
        <h1 className="warning-head not-heading">Warning</h1>
        <p className="description">
          Viewers of this file can see comments and suggestions
        </p>
      </div>
    </Notification>

    <Notification>
      <MdInfo className="info-icon" />
      <div className="des-container">
        <h1 className="info-head not-heading">Info</h1>
        <p className="description">
          Anyone on the internet can view these files
        </p>
      </div>
    </Notification>
  </div>
)
export default AlertNotifications
