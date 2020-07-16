import React, {useEffect, useState} from "react";


const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(()=>{
        setStatus(props.status)
    },[props.status])


    const enableEditMode = ()=>{
        setEditMode(true)
    }
    const disableEditMode = ()=>{
        setEditMode(false)
        props.updateStatus(status)
    }
    const changedStatus = (e) =>{
        setStatus(e.currentTarget.value)
    }
    return (
        <div>
            {!editMode &&
            <div>
                <span onDoubleClick={enableEditMode}>{props.status|| "....."}</span>
            </div>
            }
            {editMode &&
            <div>
                <input autoFocus={true} onChange={changedStatus} value={status} onBlur={disableEditMode} type="text"/>
            </div>
            }
        </div>
    )
}
export default ProfileStatusWithHooks