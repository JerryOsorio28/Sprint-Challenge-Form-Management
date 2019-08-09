import React from 'react';
import Veggy from './Veggy';

const VeggyList = (veggyList) =>{
    console.log(veggyList.veggyList)
    return(
        <div className='veggyList'>
            {veggyList.veggyList.map(veggy => <Veggy 
            veggy={veggy}
            key={veggy.name} 
            technique={veggy.technique}
            course={veggy.course}
            ingredients={veggy.ingredients}
            />)}
        </div>
    )   
};

export default VeggyList;