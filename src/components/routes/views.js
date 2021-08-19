import Dashboard from "../views/dashboard/Dashboard"
import Home from "../views/home/Home"

const a = () => (
    <h1>Esto es a</h1>
  )
  
const b = () => (
<h1>Esto es b</h1>
)

const blog = () => (
<h1>Esto es un blog con muchas entradas</h1>
)



export const views = {
    '/': {view: Home, name: 'Home', isPublic: true},
    '/dashboard': {view: Dashboard, name: 'Panel', isPublic: false},
    '/a': {view: a, name: 'A', isPublic: true},
    '/b': {view: b, name: 'B', isPublic: false},
    '/blog': {view: blog, name: 'blog', isPublic: true},
}