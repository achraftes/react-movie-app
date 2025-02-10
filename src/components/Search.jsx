

 const Search = ({searchT, setSearchT}) => {
    return (
        <div className="search">
           <div>
            <img src="search.svg" alt="search" />

            <input 
            type="text"
            placeholder="Search for a movie"
            value={searchT}
            onChange={(e)=> setSearchT(e.target.value)}
             />
           </div>
        </div>
    )
}



export default Search
