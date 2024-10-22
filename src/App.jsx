import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ThemeProvider from "./utils/ThemeContext";
import Main from "./components/main/Main";
import FourOFour from "./components/fourofour/FourOFour";
import './app.scss';
import './variables.scss';

const App = () => {
  return <>
  <ThemeProvider>
      <Router>
        <div className="main">
          <Routes>
            <Route path='/*' element={<FourOFour />} />
            <Route path='/' element={<Main />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  </>
};

export default App;
