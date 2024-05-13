  import React from 'react';
  import { useRacketContext } from './RacketContext';
  import UserCard from './UserCard';
  import { app } from './firebase';
  import { getFirestore, collection, getDocs } from 'firebase/firestore';


  function Main() {
    const { addToCart } = useRacketContext();
    const [raquetasData, setRaquetasData] = React.useState([]);

    React.useEffect(() => {
      const fetchData = async () => {
        const db = getFirestore(app);
        const querySnapshot = await getDocs(collection(db, "productos"));
        const data = querySnapshot.docs.map(doc => doc.data());
        setRaquetasData(data);
      };

      fetchData();
    }, []);

    return (
      <main className='p-4 grow'>
        <h1 className="text-5xl font-bold italic text-pink-500 text-center font-serif shadow-lg">LPA Tienda</h1>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 usuarios">
          {raquetasData.map((raqueta, index) => (
            <UserCard key={index} raqueta={raqueta} addToCart={addToCart} />
          ))}
        </section>
      </main>
    );
  }

  export default Main;
