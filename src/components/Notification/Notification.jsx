import PropTypes from 'prop-types';

export const Notification = ({ message }) => <h3>{message}</h3>;

Notification.propTipes = {
  message: PropTypes.string,
};
