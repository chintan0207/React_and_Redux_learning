import React, { useEffect, useState } from 'react'
import CountryCard from './CountryCard'
import ShimmerCard from './ShimmerCard';
import { useOutletContext } from 'react-router-dom';
// import CountriesData from '../CountriesData'

export default function CountriesList({ query,query2 }) {

  const [countriesData, setCountriesData] = useState([]);
  const [isDark] = useOutletContext()

  // const [count, setCount] = useState(0);
  useEffect(() => {

    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(() => data)
      })

      // const Interval = setInterval(() => {
      //   console.log("Running Countrylist Component")
      // },[20000]);

      // console.log(Interval);s

      return () => {
        console.log("Cleaning Up function Interval End");
        // clearInterval(Interval);
      }
  }, [])

  if (!countriesData.length) {
    return <ShimmerCard/>
  }

  return (

    <div className={`countries-container ${isDark ? "dark":""}`}>
          {countriesData.filter((country) => country.name.common.toLowerCase().includes(query))
                        .filter((country) => country.region.includes(query2))
            .map((country) => {
        return (
          <CountryCard
            key={country.name.common}
            name={country.name.common}
            flag={country.flags.svg}
            population={country.population}
            region={country.region}
            capital={country.capital?.[0]}
          />
        )
      })}
    </div>
  )
}
