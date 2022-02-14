import { Routes, Route } from 'react-router-dom'
import { ClickToEdit, Modal, Tab, Tag, Toggle } from '../components'
import { BASE } from './base'
function AppRouter() {
  return (
    <Routes>
      <Route path={BASE + '/'} element={<Toggle />} />
      <Route path={BASE + '/toggle'} element={<Toggle />} />
      <Route path={BASE + '/modal'} element={<Modal />} />
      <Route path={BASE + '/tab'} element={<Tab />} />
      <Route path={BASE + '/tag'} element={<Tag />} />
      <Route path={BASE + '/click-to-edit'} element={<ClickToEdit />} />
    </Routes>
  )
}

export default AppRouter
