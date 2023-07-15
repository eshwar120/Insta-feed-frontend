import './App.css';
import Home from './components/Home';
import { DataContextProvider } from './context/DataContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';;


function App() {

  
  return (
    <DataContextProvider>
      <ToastContainer 
                position="top-center"
                autoClose={4000}
                limit={3}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored" />
      <Home/>
    </DataContextProvider>
  );
}

export default App;
