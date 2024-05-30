import React, {useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios';
//"https://jsonplaceholder.typicode.com/users"


function Users() {
    const { id } = useParams();
    const [info, setInfo] = useState({});

    async function main(params) {
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        setInfo(data)
        console.log(data);
    }

    useEffect(() => {
        main()
    }, [])



  return (
    <>
        <Link to="/">Go Back</Link>
        <div>
            <h1>{info.name}</h1>
            <h1>{info.id}</h1>
            <h1>{info.username}</h1>
            <h1>{info.email}</h1>
        </div>
    </>
  )
}

export default Users