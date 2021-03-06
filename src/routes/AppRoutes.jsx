import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { ListOfArtists } from '../components/ListOfArtists'
import { AlbumsByArtists } from '../components/AlbumsByArtists'
import { SongsByAlbum } from '../components/SongsByAlbum'
import NotFound from '../components/NotFound'

export const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={ <ListOfArtists /> }/>
          <Route exact path="artist/:idArtist" element={ <AlbumsByArtists /> } />
          <Route exact path="artist/:idArtist/album/:idAlbum" element={ <SongsByAlbum /> } />
          <Route exact path="*" element={ <NotFound /> }/>
        </Routes>
      </BrowserRouter>
    </>
  )
}
