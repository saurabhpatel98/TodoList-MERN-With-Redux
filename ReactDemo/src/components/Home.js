import React from 'react';
import {connect} from 'react-redux';
import {handleInputAction,fetchWishAction,handleSubmitAction,handleDeleteAction} from '../myaction/action';
class Home extends React.Component{
  state={
    text:'',
    mywishes:[{_id:1,wish:"loading"}]
  }
  handledelete(id){
    
  }
  componentDidMount(){
   this.props.fetchwish()
  }
  handleSubmit(e){
    
  }
  render(){
     const list = this.props.mywishes.map(item=>{
       return <a className="collection-item" key={item._id} onClick={()=>this.props.handledelete(item._id)}>{item.wish}</a>
     })
      return(
        <div>
          <form onSubmit={(e)=>this.props.handleSubmit(e)}>
            <input 
              type="text"
              name="item"
              value={this.props.text} 
              onChange={(e)=>this.props.handleinput(e.target.value)}
               />
              <button type="submit" className="waves-effect waves-light btn">Add</button> 
          </form>

       <div className="collection">
         {list}
      </div>
        </div>
      )
  }
 
}
const mapStateToProps=(state)=>{
  return{
    text:state.text,
    mywishes:state.mywishes
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    handleinput:(input)=>{dispatch(handleInputAction(input))},
    fetchwish:()=>{dispatch(fetchWishAction())},
    handleSubmit:(e)=>{dispatch(handleSubmitAction(e))},
    handledelete:(id)=>{dispatch(handleDeleteAction(id))}
  }

}
export default connect(mapStateToProps,mapDispatchToProps)(Home);
