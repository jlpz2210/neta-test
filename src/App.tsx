import './App.css';
import axios from 'axios';
import { useQuery } from 'react-query';
import Characters from './components/Characters';
import { useState } from 'react';
import Header from './components/Header';
import Loading from './components/Loading';
import Footer from './components/Footer';

export interface MarvelAPI {
  attributionHTML: string
  attributionText: string
  code: number
  status: string
  copyright: string
  data: CharacterDataContainer
}

export interface CharacterDataContainer {
  offset: number
  limit: number
  total: number
  results: Character[]
}

export interface Character {
  id: number
  name: string
  description: string
  thumbnail: CharacterThumbnail
}

export interface CharacterThumbnail {
  extension: string
  path: string
}



function App() {
  const [page, setPage] = useState(1)
  const [selected, setSelected] = useState<number | null>(null)

  const { data, isLoading, isFetching } = useQuery(
    ['characters', page],
    {
      queryFn: async () => {
        const { data } = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?limit=25&offset=${page*25}&apikey=e5aaf224dd8fd9a368a6eebf65ff05f3`)
        return data as MarvelAPI
    },
  })

  const handlePageChange = (change: boolean) => {
    if(change){
      setPage((page) => page + 1)
      return
    }
    if(page === 1 ) return
    setPage((page) => page - 1)
    return
  }

  const handleSelected = (id: number) => {
    setSelected(id)
  }

  return (
    <div className="App h-full">
      <Header total={data?.data.total} page={page} setPage={handlePageChange}/>
      {
        isLoading || isFetching
          ? <Loading isLoading={isLoading || isFetching} />
          : <div>
              <Characters handleSelect={handleSelected} characters={data?.data.results} />
              <Footer attributionHTML={data?.attributionHTML} attributionText={data?.attributionText} copyright={data?.copyright}/>
            </div>
      }
    </div>
  );
}

export default App;
