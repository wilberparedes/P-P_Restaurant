import { Example } from '@/modules/common/components'
import { useAppSelector, useAppDispatch } from '@/hooks'
import { removeToken, saveToken } from '@/store/slice/token'

function App() {
  const token = useAppSelector((state) => state.token.token)
  const dispatch = useAppDispatch()

  return (
    <div>
      <h1 className='text-4xl font-bold'>Hello world!</h1>
      <a href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
        Learn React {process.env.REACT_APP_API_URL}
      </a>

      <h2>Token: {token}</h2>
      <Example />

      <div className='mt-3'>
        <button
          className='bg-red-500	rounded-md text-white mr-5 px-4 py-2'
          onClick={() =>
            dispatch(saveToken(`HolaMundo ${new Date().toDateString()}`))
          }
        >
          Add token
        </button>
        <button
          className='border border-red-500 rounded-md text-red-500 px-4 py-2'
          onClick={() => dispatch(removeToken())}
        >
          Remove token
        </button>
      </div>
    </div>
  )
}

export default App
