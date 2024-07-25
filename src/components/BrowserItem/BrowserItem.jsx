import React from 'react'
import CupCake from '../../assets/images/CupCake.svg'
import Pizza from '../../assets/images/Pizza.svg'
import Kebab from '../../assets/images/Kebab.svg'
import Salmon from '../../assets/images/Salmon.svg'
import Doughnut from '../../assets/images/Doughnut.svg'
const BrowserItem = () => {
    const categories = [
        {
            id:1,
            img:CupCake,
            title:"Cupcake",
            count:"22 Items",
            bg:"#F0FEEB"
        },
        {
            id:2,
            img:Pizza,
            title:"Pizza",
            count:"22 Items",
            bg:"#E4F2F4"
        },
        {
            id:3,
            img:Kebab,
            title:"Kebab",
            count:"22 Items",
            bg:"#EAEEFA"
        },
        {
            id:4,
            img:Salmon,
            title:"Salmon",
            count:"22 Items",
            bg:"#F9EEF3"
        },
        {
            id:5,
            img:Doughnut,
            title:"Doughnut",
            count:"22 Items",
            bg:"#F3F7D9"
        },
    ]
  return (
    <ul className='flex justify-between w-[1239px] mx-auto'>
      {categories.map((item, index) => (
        <li className={`w-[230px] py-[30px] bg-[${item.bg}] text-center`} key={index}>
            <img className='mx-auto pd-[30px' src={item.img} alt="img" />
            <h2 className='mt-[21px]'>{item.title}</h2>
            <p>{item.count}</p>
        </li>
      ))}
    </ul>
)
}

export default BrowserItem
