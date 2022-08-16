import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
import Header from './components/UI/Header/Header';
import AdminPanel from './pages/AdminPanel/AdminPanel';
import Main from './pages/Main/Main';

const App = () => {
  return (
    <div className={styles.container}>
      <Header/>

        <div className={styles.wrap}>

          <Routes >
            <Route path='/' element={<Main/>}/>
            <Route  path='/admin' element={<AdminPanel/>} />
          </Routes>

        </div>
        
    </div>
  );
}

export default App;
