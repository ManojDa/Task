import { notification } from 'antd';

const Notification = (type,displayMessage) => {
  notification[type]({
    message: 'User Details',
    description: displayMessage,
    notofication: 1
  });
};

export default Notification;