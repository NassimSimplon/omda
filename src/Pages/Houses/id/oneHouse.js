import React, { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom';
const OneHouse = () => {
  const { id } = useParams();

  const [houses, setHouses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
      try {
          const res = await fetch(
              "https://api.mockfly.dev/mocks/5db56058-011b-4531-a0ce-90c32837abeb/nass/house/get" 
          );
          if (!res.ok) throw new Error("Failed to fetch data");
          // Log the response to see its structure
          const data = await res.json();
          // console.log("API Response:", data);
          setHouses(data);
      } catch (error) {
          console.error("Error fetching data:", error);
          setError(error.message);
      } finally {
          setLoading(false);
      }
  };

  useEffect(() => {
      fetchData();
  }, []);
  const houseList = useMemo(() => {
      return houses?.filter((x)=>x.id === id).map((house) => (
        <div to={`one/${house.id}`} className="card" key={house.id}>
          <img src={house.img} alt={house.name} />
          <h1>{house.owner || 'Unknown Owner'}</h1>
          <p>Location: {house.name || 'No Name'}</p>
          <p>Status: {house.status || 'N/A'}</p>
        </div>
      ));
    }, [houses]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div>
           {houseList.length > 0 ? houseList : <p>No houses available</p>}</div>
  )
}

export default OneHouse