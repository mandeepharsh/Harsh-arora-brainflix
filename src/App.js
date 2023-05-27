// tools
import { BrowserRouter,Routes,Route } from 'react-router-dom';

// styling file
import './App.scss';

// Components
import HomePage from './pages/HomePage/HomePage';
import VideoUploadPage from './pages/VideoUploadPage/VideoUploadPage';
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';


function App() {


  return (
    <BrowserRouter>
      <Header/>
     <Routes>
       <Route path='/' element={ <HomePage  />} />
       <Route path='/videos/:id' element = {<HomePage/>}/>       
       <Route path ="/upload" element = {<VideoUploadPage/>}/>
       <Route path='*' element ={<NotFound/>}/>
     </Routes>
   </BrowserRouter>
  );
}

export default App;
