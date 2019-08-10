import React from 'react';

class Veggy extends React.Component {
    render(){
        console.log(this.props)
        return (
            <div className='veggy'>
                <h3>{this.props.veggy.name}</h3>
                <h5>Ingredients:</h5>
                <div className='ingredientsList'>
                {this.props.ingredients.map((ingredient, i) => <ul key='i'><li>{ingredient}</li></ul>)}
                </div>
                <div className='footer'>
                <h5>Course: {this.props.course}</h5>
                <h5>Technique: {this.props.technique}</h5>
                </div>
            </div>
        ); 
    }
};

export default Veggy;