import { useAppDispatch } from '@/hooks'
import { saveToken } from '@/store/slice/token'

export const Login = () => {
  const dispatch = useAppDispatch()
  return (
    <div>
      <h1>Login Components</h1>
      <button
        className='bg-red-500	rounded-md text-white mr-5 px-4 py-2'
        onClick={() =>
          dispatch(saveToken(`HolaMundo ${new Date().toDateString()}`))
        }
      >
        Add token
      </button>
    </div>
  )
}
