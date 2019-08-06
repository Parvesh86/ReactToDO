import React,{Component} from 'react'
import Card from './Card'
import DATA from './../DB/Data'

function MainContent(){
    const cardetails = DATA.map(item=> <Card key={item.id} Name={item.name} description={item.description} image={item.image}/> )
    return(
        <div className="row clearfix">
           {cardetails}
        </div>  
       )
}
 

export default MainContent