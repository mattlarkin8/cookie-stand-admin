import Head from 'next/head'
import { useState } from 'react';

export default function Home(){
  const [reply, setReply] = useState();

  function handleCreateStand(event){
    event.preventDefault();
    setReply(`{"location":"${event.target.location.value}","minCustomers":${event.target.min.value},"maxCustomers":${event.target.max.value},"avgCookies":${event.target.avg.value}}`);
    event.target.reset();
  }

  return (
    <div>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      <Header/>
      <main>
        <StandForm onSubmit={handleCreateStand}/>
        <ReportTable/>
        <p className='flex justify-center my-3'>{reply}</p>
      </main>
      <Footer copyright="2022"/>
    </div>
  )
}

function Header(){
  return (
    <header className='p-4 text-4xl font-bold bg-teal-400'>
      <h1>Cookie Stand Admin</h1>
    </header>
  );
}

function Footer(props){
  return (
    <footer className='px-4 py-3 mt-10 bg-teal-400'>
      <p>&copy;{props.copyright}</p>
    </footer>
  );
}

function StandForm(props){
  return (
    <form className='p-3 mx-4 my-8 bg-teal-300' onSubmit={props.onSubmit}>
      <h2 className='text-2xl font-bold'>Create Cookie Stand</h2>
      <label className='p-1 m-1' htmlFor="location">Location</label>
      <input className='p-1 m-1' type="text" name="location" required></input>
      <label className='p-1 m-1' htmlFor="min">Minimum Customers per Hour</label>
      <input className='p-1 m-1' type="text" name="min" required></input>
      <label className='p-1 m-1' htmlFor="max">Maximum Customers per Hour</label>
      <input className='p-1 m-1' type="text" name="max" required></input>
      <label className='p-1 m-1' htmlFor="avg">Average Cookies per Sale</label>
      <input className='p-1 m-1' type="text" name="avg" required></input>
      <button className='px-16 py-4 my-2 ml-16 bg-teal-500' type='submit'>Create</button>
    </form>
  );
}

function ReportTable(){
  return (
    <p className='flex justify-center my-4'>Report Table Coming Soon...</p>
  );
}