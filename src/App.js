import './App.css';
import {Routes, Route, useLocation} from 'react-router-dom';
import Intro from './Pages/Intro';
import Product from './Pages/Product';
import DetailKiring from './Pages/DetailKiring';
import Making from './Pages/Making';
import Res from './Pages/Res';
import DetailMsg from './Pages/DetailMsg';
import DetailLike from './Pages/DetailLike';
import DetailMap from './Pages/DetailMap';

function App() {

  const location = useLocation();
  const { selectedGuitar, selectedPeak } = location.state || {};
  

  return (
    <div className="App">
      <Routes>

        <Route path='/' element={<Intro/>}></Route>
        <Route path='/product' element={<Product/>}></Route>
        <Route path='/detailKiring' element={<DetailKiring/>}></Route>
        <Route path='/making' element={<Making/>}/>
        <Route path='/res' element={<Res selectedGuitar={selectedGuitar} selectedPeak={selectedPeak} />} />
        <Route path='/detailMsg' element={<DetailMsg/>}></Route>
        <Route path='/detailLike' element={<DetailLike/>}></Route>
        <Route path='/detailMap' element={<DetailMap/>}></Route>

         {/* 모든 다른 경로에 대한 처리 */}
         <Route path='*' element={<div> <h1>404 - Not Found</h1> </div>}/>

      </Routes>
    </div>
  );
}

export default App;
