import React,{Component} from 'react'
import Comment from './Comment'
class CommentList extends Component{
    static defaultProps={
        comments:[
        {username:'Tom',content:'hello'},
        {username:'Jerry',content:'hello'},
        {username:'Lisa',content:'hello'},
    ]}
    render(){
        return (
            <div>
                {this.props.comments.map((comment,index)=><Comment comment={comment} key={index}/>)}
            </div>
        )
    }
}
export default CommentList