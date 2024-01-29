import { AppRoutes } from './routes';
import { AppProvider } from './provider/app.provider';



function App() {

  return (
    <AppProvider>
      <AppRoutes/>
    </AppProvider>
  )
}

export default App
