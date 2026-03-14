const Header = (props) => (
  <h1>{props.course}</h1>
)


const Part = (props) => (
  <p>{props.part} {props.excercises}</p>
)

const Content = (props) => (
  <>
  {props.courseContent.map(part => <Part key={part.part} part={part.part} excercises={part.excercises}/>)}
  </>
)

const Total = (props) => (
  <p>Number of exercises {props.courseContent.reduce((total, chapter) => total + chapter.excercises, 0 )}</p>
)

const App = () => {
  const course = 'Half Stack application development';
  const courseContent = [
    {part: 'Fundamentals of React', excercises: 10},
    {part: 'Using props to pass data', excercises: 7},
    {part: 'State of a component', excercises: 14}
  ]

  return (
    <>
    <Header course={course} />
    <Content courseContent={courseContent} />
    <Total courseContent={courseContent} />
    </>
  )
}
// no AI was used to write this code :)

export default App;