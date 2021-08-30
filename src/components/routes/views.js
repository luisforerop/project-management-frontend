// import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Project from "../usersViews/projects/Project";
import Dashboard from "../usersViews/dashboard/Dashboard";

import Home from "../views/home/Home";
import ViewTest from "../usersViews/viewTest";
import UserStories from "../usersViews/userStories";
import Ticket from "../usersViews/tickets";
import Team from "../usersViews/team/Team";


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
/*
const Test = props => {
  return (
    <div>
      <Link to={'/dashboard'}>dashboard</Link>
      
    </div>
  )
}*/

const isPublicFalse = true

export const views = {
    '/': {view: Home, name: 'Home', isPublic: true},
    '/dashboard': {view: Dashboard, name: 'Dashboard', isPublic: isPublicFalse},
    '/a': {view: a, name: 'A', isPublic: true},
    '/test': {view: ViewTest, name: 'Test', isPublic: true},
    '/b': {view: b, name: 'B', isPublic: true},
    '/blog': {view: blog, name: 'blog', isPublic: true},
    '/dashboard/project/:name': {view: Project, name: 'Project', isPublic: isPublicFalse},
    '/dashboard/newProject/': {view: Project, name: 'Project', isPublic: isPublicFalse},
    '/dashboard/userStories': {view: UserStories, name: 'userStories', isPublic: isPublicFalse},
    '/dashboard/ticket': {view: Ticket, name: 'ticket', isPublic: isPublicFalse},
    '/dashboard/newUserStories': {view: UserStories, name: 'userStories', isPublic: isPublicFalse},
    '/dashboard/userStories/:ticketId': {view: Ticket, name: 'ticket', isPublic: isPublicFalse},
    '/dashboard/team': {view: Team, name: 'team', isPublic: isPublicFalse},
}