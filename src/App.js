 import React, { useState } from 'react'
 import Header from './components/Header'
 import Footer from './components/Footer'
 import PlantList from './components/PlantList'
 
 const App = () => {
     const [plants, setPlants] = useState([]);
     const [loading, setLoading] = useState(false);
     return (
     <>
             <Header setPlants={setPlants} setLoading={setLoading} />
             <PlantList plants={plants} loading={loading}/>
             <Footer />
    </>
     )
 }
 
 export default App
 