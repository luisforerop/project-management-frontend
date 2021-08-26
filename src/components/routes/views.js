import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Project from "../usersViews/projects/Project";
import Dashboard from "../usersViews/dashboard/Dashboard";
import Home from "../views/home/Home";
import ViewTest from "../usersViews/viewTest";

const a = (props) => {
  console.log(props);
  return(
    <h1>Esto es a</h1>
  )}
  
const b = () => (
<h1>Esto es b</h1>
)

const blog = () => (
<h1>Esto es un blog con muchas entradas</h1>
)

const Test = props => {
  return (
    <div>
      <Link to={'/dashboard'}>dashboard</Link>
      
    </div>
  )
}


export const views = {
    '/': {view: Home, name: 'Home', isPublic: true},
    '/dashboard': {view: Dashboard, name: 'Dashboard', isPublic: false},
    '/a': {view: a, name: 'A', isPublic: true},
    '/test': {view: ViewTest, name: 'Test', isPublic: true},
    '/b': {view: b, name: 'B', isPublic: true},
    '/blog': {view: blog, name: 'blog', isPublic: true},
    '/dashboard/project/:id': {view: Project, name: 'Project', isPublic: false},
    '/dashboard/userStories/:id': {view: Test, name: 'userStories', isPublic: false},
    '/dashboard/ticket/:id': {view: Test, name: 'ticket', isPublic: false},
}