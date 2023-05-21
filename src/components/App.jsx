import { useState } from 'react';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';
import { feedbackNames } from 'constants';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function statisticUpdateMethod(score) {
    switch (score) {
      case feedbackNames.good:
        setGood(good + 1);
        return;
      case feedbackNames.neutral:
        setNeutral(neutral + 1);
        return;
      case feedbackNames.bad:
        setBad(bad + 1);
        return;
      default:
        return;
    }
  }

  return (
    <div
      style={{
        display: 'block',
        marginLeft: '30px',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(feedbackNames)}
          statisticUpdateMethod={statisticUpdateMethod}
        />
      </Section>

      {good === 0 && neutral === 0 && bad === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={good + neutral + bad}
            positivePercentage={Math.round(
              (good / (good + neutral + bad)) * 100
            )}
          />
        </Section>
      )}
    </div>
  );
}
