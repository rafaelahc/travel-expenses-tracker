import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ThemeProvider } from 'styled-components';
import {theme} from '../src/styles/theme';
import GlobalStyles from './styles/GlobalStyle';

/* Pages   */
import Landing from './pages/Landing';
import FirstForm from './pages/FirstForm';
import MainPage from './pages/MainPage';
import AddExpense from './pages/AddExpense';

//React Router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/FirstForm" element={<FirstForm />} />
        <Route path="/MainPage" element={<MainPage />} />
        <Route path="/AddExpense" element={<AddExpense />} />
      </Routes>
    </Router>
    <GlobalStyles />
  </ThemeProvider>
  )
}

export default App
