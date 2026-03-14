const Header = (props) => (
  <h1>{props.course}</h1>
)


const Part = (props) => (
  <p>{props.name} {props.exercises}</p>
)

const Content = (props) => (
  <>
  {props.courseContent.map(part => <Part key={part.name} name={part.name} exercises={part.exercises}/>)}
  </>
)

const Total = (props) => (
  <p>Number of exercises {props.courseContent.reduce((total, chapter) => total + chapter.exercises, 0 )}</p>
)

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content courseContent={[part1, part2, part3]} />
      <Total courseContent={[part1, part2, part3]} />
    </div>
  )
}
// no AI was used to write this code :)

export default App;