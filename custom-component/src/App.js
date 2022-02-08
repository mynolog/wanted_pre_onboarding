import AppRouter from './routes/AppRouter'
import Header from './components/Partials/Header/Header'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <AppRouter />
    </div>
  )
}

export default App
