import { useAppDispatch, useAppSelector } from '@/hooks'
import { removeToken, selectTokenStore } from '@/store/slice/token'

export const Dashboard = () => {
  const token = useAppSelector(selectTokenStore)
  const dispatch = useAppDispatch()
  return (
    <div>
      <h1>Dashboard example {token}</h1>

      <button
        className='border border-red-500 rounded-md text-red-500 px-4 py-2'
        onClick={() => dispatch(removeToken())}
      >
        Remove token
      </button>
    </div>
  )
}
