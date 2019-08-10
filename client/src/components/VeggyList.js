import React from 'react';
import Veggy from './Veggy';

const VeggyList = (veggyList) =>{
    return(
        <div className='veggyList'>
            {veggyList.veggyList.map(veggy => <Veggy 
            veggy={veggy}
            key={veggy.name} 
            technique={veggy.technique}
            course={veggy.course}
            ingredients={veggy.ingredients}
            // data-testid={veggy}
            />)}
        </div>
    )   
};

export default VeggyList;