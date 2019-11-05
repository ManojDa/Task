import { notification } from 'antd';

const notificationMessage = (type,displayMessage) => {
  notification[type]({
    message: 'Employee Details',
    description: displayMessage,
    notofication: 1
  });
};

export default notificationMessage;