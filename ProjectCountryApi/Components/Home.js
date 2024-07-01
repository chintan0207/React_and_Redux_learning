import React, { useState } from 'react'
import SearchBar from './SearchBar'
import SelectMenu from './SelectMenu'
import CountriesList from './CountriesList'
import { useOutletContext } from 'react-router-dom';

export default function Home() {
  const [query, setQuery] = useState("");
  const [query2, setQuery2] = useState("");
  const [isDark] = useOutletContext()
    return (
        <>
            <main className={`${isDark ? "dark":""}`}>
                <div className='search-content'>
                    <SearchBar setQuery={setQuery} />
                    <SelectMenu setQuery2={setQuery2} />
                </div>
                {
                    query === "unmount" ? "" : <CountriesList query={query} query2={query2}/>
                }
            </main>
        </>
    )
}
