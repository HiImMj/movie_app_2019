import React from 'react';
import PropTypes from 'prop-types';

function Food({name, picture, rating}){
  return(

    <div>
    <h2>I love photo {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name}/>
    </div>

  );
}

const foodLink = [{
    id : 1,
    name : 'Kimchi',
    image : 'https://recipe1.ezmember.co.kr/cache/recipe/2016/10/10/e1d38d22a01a5f11619e141e089f66cb1.jpg',
    rating : 5,
  },
  {
    id : 2,
    name : 'Samgyeopsal',
    image : 'https://mblogthumb-phinf.pstatic.net/20160617_36/coco1877_1466124393128CeS0x_JPEG/DSC06006.JPG?type=w800',
    rating : 4.9,
  },
  {
    id : 3,
    name : 'Bibimbap',
    image:'http://food.chosun.com/site/data/img_dir/2012/05/24/2012052401688_0.jpg',
    rating : 3,
  }

];

function renderFood(dish){
  return <Food name={dish.name} picture = {dish.image} rating = {dish.rating}/>
}


function App() {
  console.log(foodLink.map(renderFood));

  return <div>
    <h1>Hello</h1>

    {foodLink.map(dish => (<Food key={dish.id} name = {dish.name} picture = {dish.image} rating = {dish.rating}/>))}
    
  </div>;
    
}


Food.propTypes ={
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.number.isRequired,
}
export default App;
