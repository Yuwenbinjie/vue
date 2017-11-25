import Show from './components/Show'
import Add from './components/AddBlog'
import Per from './components/PerBlog'
import Edit from './components/Edit'

export default[
  {path:"/",component:Show},
  {path:'/add',component:Add},
  {path:'/per/:id',component:Per},
  {path:'/edit/:id',component:Edit}
]
