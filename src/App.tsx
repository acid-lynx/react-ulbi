import logo from './assets/images/react-png.svg'
import './assets/style.scss'

import { Counter } from './components/Counter'

export const App = () => {
  return (
    <div>
      <img src={logo} alt="img" width={300} height={300} />
      <h2>HELLO WORLD!!</h2>
      <Counter />
    </div>
  )
}
