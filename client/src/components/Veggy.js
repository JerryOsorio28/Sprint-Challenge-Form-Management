import React from 'react';

const Veggy = veggy => {
    // console.log(veggy)
    return (
        <div className='veggy'>
            <h3>{veggy.veggy.name}</h3>
            <h5>Ingredients:</h5>
            {veggy.veggy.ingredients.map(ingredient => <ul><li>{ingredient}</li></ul>)}
            <h5>{veggy.veggy.course}</h5>
            <h5>{veggy.veggy.technique}</h5>
        </div>
    );
};

export default Veggy;