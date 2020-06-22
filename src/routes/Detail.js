import React from 'react';


class Detail extends React.Component{
    componentDidMount(){
        const {location, history} = this.props;

        if(location.state === undefined){
            history.push('/');
        }
    }

    render(){
        const {location} = this.props;

        if(location.state){
            return (
            <div>
            <h4>{location.state.title}</h4>
            <img src={location.state.poster} alt={location.state.title} title={location.state.title}/>
            <span>{location.state.summary}</span>
            </div>
            );
        }else{
            return null;
        }

        
    }
}

// function Detail(props){
//     console.log(props);
//     return <span>Hello</span>;
// }

export default Detail;