import { Button } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, statisticUpdateMethod }) => {
  return options.map(option => (
    <Button
      key={option}
      type="button"
      name={option}
      onClick={e => {
        statisticUpdateMethod(e.target.name);
      }}
    >
      {option}
    </Button>
  ));
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  statisticUpdateMethod: PropTypes.func.isRequired,
};
