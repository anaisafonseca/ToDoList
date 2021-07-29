import { TaskList } from './components/TaskList'
import { Header } from "./components/Header";
import './styles/global.scss'


export function App() {
  return (
    <div style={{background:'#202020', height: '100vh' }}>
      <Header />
      <TaskList />
    </div>
  )
}