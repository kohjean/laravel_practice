import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './Home'
import { TweetPage } from './tweet'
import { EditForm } from './tweet/EditForm'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TweetPage />} />
        <Route path="/tweet/update/:id" element={<EditForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
