import React from 'react'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import SearchDetail from '@/components/searchResult/SearchDetail'
import Wrapper from '@/components/shared/Wrapper'
import Filters from '@/components/searchResult/Filters'
import CarCards from '@/components/searchResult/CarCards'
const SearchResult = () => {
    const hide=true
  return (
    <div>
        <Navbar hide={hide}/>
        <Wrapper>
        <SearchDetail/>
        <Filters/>
        <CarCards/>     
        </Wrapper>
        <Footer/>

      
    </div>
  )
}

export default SearchResult
