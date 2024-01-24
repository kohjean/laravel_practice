import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './Home'
import { TweetPage } from './tweet'
import { EditForm } from './tweet/EditForm'
import { Login } from './login'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TweetPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tweet/update/:id" element={<EditForm />} />
        <Route path="*" element={<a href="/">404</a>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
