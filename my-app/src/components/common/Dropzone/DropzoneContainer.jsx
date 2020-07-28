import React, {useCallback, useMemo} from 'react'
import {useDropzone} from 'react-dropzone'
import c from './DropzoneContainer.module.css'
const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 4,
    borderRadius: 7,
    borderColor: '#1A427D',
    borderStyle: 'dashed',
    backgroundColor: 'none',
    outline: 'none',
    transition: 'border .24s ease-in-out',
};

const maxSize = 500000;
const acceptedFileTypes = 'image/*'
const activeStyle = {
    borderColor: '#2196f3'
};

const acceptStyle = {
    borderColor: '#00e676'
};

const rejectStyle = {
    borderColor: '#ff1744'
};

const DropzoneContainer = (props) => {

    let files = [];

    const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
        props.handleDropzone(acceptedFiles, rejectedFiles)
        files = acceptedFiles.map(file => <div key={file.path}>{file.path}</div>);
    }, [])
    const {
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject
    } = useDropzone({accept: acceptedFileTypes, onDrop, maxSize: maxSize, multiple:false});

    const style = useMemo(() => ({
        ...baseStyle,
        ...(isDragActive ? activeStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {})
    }), [
        isDragActive,
        isDragReject,
        isDragAccept
    ]);

    return (
        <div className={c.dropzoneWrapper}>
        <div {...getRootProps({style})}>
            <input {...getInputProps()} />
            {
                isDragActive ?
                    <span>Drop the files here ...</span> :
                    <span>Drag 'n' drop file here,<br/> or click to select file</span>
            }
        </div>
            {files}
        </div>
    )
}
export default DropzoneContainer