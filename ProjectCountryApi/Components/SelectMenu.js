import React from 'react'

export default function SelectMenu({setQuery2}) {
    
    return (
        <>
            <select onChange={(e) => setQuery2(e.target.value)} className="filter-by-region">
                <option value="">Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </>
    )
}
