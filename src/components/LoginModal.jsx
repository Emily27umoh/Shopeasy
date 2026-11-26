import { useState } from 'react'

function LoginModal({ onClose }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    alert('Welcome, ' + email + '!')
    onClose()
  }

  return (
    <div onClick={onClose} className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
      <div onClick={(e) => e.stopPropagation()} className="relative bg-white text-gray-900 rounded-lg p-6 w-full max-w-sm">
        <button onClick={onClose} className="absolute top-3 right-4 text-xl text-gray-500 hover:text-gray-900" > X </button>
        <h2 className="text-xl font-bold mb-4">Login</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required className="border rounded-md px-3 py-2" />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required className="border rounded-md px-3 py-2"/>
          <button type="submit" className="bg-gray-900 text-white rounded-md py-2 hover:bg-gray-700" >Login</button>
        </form>
      </div>
    </div>
  )
}

export default LoginModal