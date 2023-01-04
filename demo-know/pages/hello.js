import Install from './components/Install';
import Home from './components/Home';

function App() {

    if (typeof window !== undefined) {
        console.log('You are on the browser,You are good to go')
        if (window.ethereum) {
            return <Home />;
          } else {
            return <Install />
          }
        } else {
        console.log('You are on the server,Cannot execute')
       } // It will always go in else block
    
}

export default App;
