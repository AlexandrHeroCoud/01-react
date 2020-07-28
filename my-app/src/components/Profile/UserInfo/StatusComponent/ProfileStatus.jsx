import React from "react";

class ProfileStatus extends React.Component{

    state = {
        editMode: false,
        status: this.props.status
    }

    activateMode =()=>{
        this.setState({
            editMode: true
        })

    }

    deactivateEditMode = () =>{
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    changedStatus = (e) =>{
        this.setState({
            status: e.currentTarget.value
        })
    }
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     console.log(prevState)
    // }

    render(){
        return(
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateMode}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode&&
                    <div>
                        <input autoFocus={true} onChange={this.changedStatus}  onBlur={this.deactivateEditMode} type="text" value={this.state.status}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus