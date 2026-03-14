import { useState } from "react";

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;
const StatisticRow = ({ text, value, suffix }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value} {suffix}</td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = all === 0 ? 0 : (good - bad) / all;
  const positive = all === 0 ? 0 : (good / all) * 100;

  if (all === 0) return <p>No feedback given</p>
  return (
    <>
    <table>
      <tbody>
      <StatisticRow text={'good'} value={good} />
      <StatisticRow text={'neutral'} value={neutral} />
      <StatisticRow text={'bad'} value={bad} />
      <StatisticRow text={'all'} value={all} />
      <StatisticRow text={'average'} value={average} />
      <StatisticRow text={'positive'} value={positive} suffix={'%'} />
      </tbody>
    </table>
    </>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setGood((g) => g + 1)} text="good" />
      <Button onClick={() => setNeutral((n) => n + 1)} text="neutral" />
      <Button onClick={() => setBad((b) => b + 1)} text="bad" />
      <h1>statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
};

export default App;
