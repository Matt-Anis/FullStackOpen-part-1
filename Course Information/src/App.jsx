const Header = (props) => (
  <h1>{props.course}</h1>
)

const Content = (props) => (
  <p>{props.part} {props.excercises}</p>
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
    {courseContent.map(part => <Content key={part.part} part={part.part} excercises={part.excercises}/>)}
    <Total courseContent={courseContent} />
    </>
  )
}
// no AI was used to write this code :)

export default App;