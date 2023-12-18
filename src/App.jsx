// import logo from "./logo.svg";
import './App.css'
import React, { useEffect, useState } from 'react'
import Player from './componets/Player'
import Navigation from './componets/Navigation'
import PlayList from './componets/PlayList'
import MainSidebar from './componets/MainSidebar'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 5000)
  }, [])
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <Navigation />
          <PlayList isLoading={isLoading}/>
          <MainSidebar />
        </main>
        <Player />
        <footer className="footer"></footer>
      </div>
    </div>
  )
}
export default App
