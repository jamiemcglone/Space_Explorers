import './App.css';
import Header from './components/Header';
import Main from './containers/Main';
import { BrowserRouter } from 'react-router-dom';

function App() {
    return (
        <>
            <BrowserRouter>
                <div className='App'>
                    <Header />
                    <Main />
                </div>
            </BrowserRouter>
            <div className='wrapper-animation'>
                <div id='stars'></div>
                <div id='stars2'></div>
                <div id='stars3'></div>
            </div>
        </>
    );
}

export default App;
