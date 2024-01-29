import { AppRoutes } from './routes';
import { AppProvider } from './provider/app.provider';
import { SnackbarProvider } from 'notistack';



function App() {

  return (
    <AppProvider>
      <SnackbarProvider maxSnack={2}>
        <AppRoutes/>
      </SnackbarProvider>
    </AppProvider>
  )
}

export default App
