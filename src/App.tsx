import { Example } from '@/modules/common/components'

function App() {
  return (
    <div>
      <header>
        <h1 className='text-4xl font-bold'>Hello world!</h1>
        <a href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
          Learn React {process.env.REACT_APP_API_URL}
        </a>
        <Example />
      </header>
    </div>
  )
}

export default App
