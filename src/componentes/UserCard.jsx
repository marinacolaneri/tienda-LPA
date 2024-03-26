import React from 'react'

function UserCard(props) {

    console.log (props)
    console.log(props.name)

  return (
    <div className='user-card flex flex-col items-center pt-6'>
    <img src={`${props.name}.jpg`} alt="" className="h-60 w-40 object-cover" />
    <h2 className="text-center">{props.name}</h2>
    <button className="mt-2 bg-pink-300 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded">Agregar al carrito</button>
  </div> 
  )
}

export default UserCard