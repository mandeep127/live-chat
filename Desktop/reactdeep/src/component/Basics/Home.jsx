import React, {useState} from 'react';
import './style.css';
import Menu from '../MenuApi';
import MenuCard from './MenuCard';
import Navbar from './Navbar';

const uniqueList= [
  ...new Set(Menu.map((curElem) =>{
  return curElem.category;
})),'all',];

console.log(uniqueList);

const Home = () => {
  const[menuData, setMenuData]= useState(Menu);
  const[menuList]= useState(uniqueList);
  
  const filterItem = (category) => {
    if (category === 'all') {
      setMenuData(Menu);
      return;
    }
    const updatedList = Menu.filter((curElem) =>{
      return curElem.category === category;
    });
    setMenuData(updatedList);
  };
  return (
    <>
 <Navbar filterItem={filterItem} menuList={menuList} />
  <MenuCard menuData={menuData}/>
    </>
    
  )
}

export default Home;
