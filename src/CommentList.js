import React,{Component} from 'react'
import Comment from './Comment'
class CommentList extends Component{
    static defaultProps={
        comments:[
        {username:'Tom',content:'hello'},
        {username:'Jerry',content:'hello'},
        {username:'Lisa',content:'hello'},
    ]}
    handleDeleteComment=(index)=>{
        if(this.props.onDeleteComment){
            this.props.onDeleteComment(index)
        }   
    }
    render(){
        return (
            <div>
                {this.props.comments.map((comment,index)=><Comment onDeleteComment={this.handleDeleteComment} comment={comment} key={index} index={index}/>)}
            </div>
        )
    }
}
export default CommentList