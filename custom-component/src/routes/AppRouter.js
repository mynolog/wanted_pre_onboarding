import { Routes, Route } from 'react-router-dom'
import {
  AutoComplete,
  ClickToEdit,
  Modal,
  Tab,
  Tag,
  Toggle,
} from '../components'
function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Toggle />} />
      <Route path="/toggle" element={<Toggle />} />
      <Route path="/auto-complete" element={<AutoComplete />} />
      <Route path="/modal" element={<Modal />} />
      <Route path="/tab" element={<Tab />} />
      <Route path="/tag" element={<Tag />} />
      <Route path="/click-to-edit" element={<ClickToEdit />} />
    </Routes>
  )
}

export default AppRouter
