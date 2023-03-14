import { Button } from './FeedbackOptions.styled';
import { feedbackNames } from 'constants';

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <>
      <Button
        type="button"
        name={feedbackNames.good}
        onClick={e => {
          onLeaveFeedback(e.target.name);
        }}
      >
        {feedbackNames.good}
      </Button>
      <Button
        type="button"
        name={feedbackNames.neutral}
        onClick={e => {
          onLeaveFeedback(e.target.name);
        }}
      >
        {feedbackNames.neutral}
      </Button>
      <Button
        type="button"
        name={feedbackNames.bad}
        onClick={e => {
          onLeaveFeedback(e.target.name);
        }}
      >
        {feedbackNames.bad}
      </Button>
    </>
  );
};
