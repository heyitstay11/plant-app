import React, { useState }  from 'react'

const Header = ({setPlants, setLoading }) => {
    const [search, setSearch] = useState('');

    const handleChange = (e) => {
        setSearch(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(search){
            setLoading(true)
            fetch(`https://cors-anywhere.herokuapp.com/https://trefle.io/api/v1/plants/search?token=API_TOKEN&q=${search}`)
            .then(res => res.json())
            .then(data =>{
               setPlants(data.data);
               setLoading(false);
            }).catch((err) =>{
                console.log(err);
                setLoading(false)
            })
        setSearch('')
        }
    }
    return (
      <header>
           <nav>
           <h1 className="title">Plant App </h1>
       </nav>
       <form onSubmit={handleSubmit}>
           <input onChange={handleChange} value={search} class="search" type="search" placeholder="Search..." />
       </form>
      </header>
       
    )
}

export default Header
