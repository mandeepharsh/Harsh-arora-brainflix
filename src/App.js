import { BrowserRouter,Routes,Route } from 'react-router-dom';

import './App.scss';

// Components
import HomePage from './pages/HomePage/HomePage';


import VideoUploadPage from './pages/VideoUploadPage/VideoUploadPage';
import Header from './components/Header/Header';


function App() {


  return (
    <BrowserRouter>
      <Header/>
     <Routes>
       <Route path='/' element={ <HomePage  />} />
       <Route path='/:id' element = {<HomePage/>}/>       
       <Route path ="/upload" element = {<VideoUploadPage/>}/>
     </Routes>
   </BrowserRouter>
  );
}

export default App;
