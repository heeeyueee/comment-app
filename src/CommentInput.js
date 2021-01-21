import React,{Component} from 'react'
class CommentInput extends Component{
    constructor(props){
        super(props)
        this.state={
            username:'',
            content:''
        }
    }
    componentWillMount(){
        this._loadUsername()
    }
    componentDidMount(){
        this.textarea.focus()
    }
    _loadUsername(){
        const username=localStorage.getItem("username")
        if(username){
            this.setState({username})
        }  
    }
    _saveUsername(username){
        localStorage.setItem("username",username)
    }
    handleUsernameBlur=(e)=>{
        this._saveUsername(e.target.value)
    }
    handleUsernameChange=(e)=>{
        this.setState({
            username:e.target.value
        })
    }
    handleContentChange=(e)=>{
        this.setState({
            content:e.target.value
        })
    }
    handleSubmit=()=>{
        if(this.props.onSubmit){
            this.props.onSubmit({
                username:this.state.username,
                content:this.state.content,
                createdTime:+new Date()
            })
            
            // const {username,content}=this.state
            // this.props.onSubmit({username,content})
        }
        this.setState({content:''})
    }
    render(){
        return (
            <div className="comment-input">
                <div className="comment-field"> 
                    <span className="comment-field-name">用户名：</span>
                    <div className="comment-field-input">
                        <input 
                        value={this.state.username}
                        onBlur={this.handleUsernameBlur}
                        onChange={this.handleUsernameChange}/>
                    </div>
                </div>
                <div className="comment-field">
                <span className="comment-field-name">评论内容：</span>
                    <div className="comment-field-input">
                        <textarea 
                        value={this.state.content}
                        ref={(textarea)=>this.textarea=textarea}
                        onChange={this.handleContentChange}/>
                    </div>
                </div>
                <div className="comment-field-button">
                    <button onClick={this.handleSubmit}>
                        发布
                    </button>
                </div>
            </div>

        )
    }
}
export default CommentInput