
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Cartprovider } from './context/CartContext.jsx';
import { UserProvider } from './context/UserContext.jsx';

createRoot(document.getElementById('root')).render(
  <UserProvider>
  <Cartprovider>
    <App />
  </Cartprovider>
  </UserProvider>
)
