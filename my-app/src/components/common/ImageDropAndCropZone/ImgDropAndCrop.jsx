import React, {Component} from 'react'
import {base64StringtoFile, extractImageFileExtensionFromBase64,} from '../../../utils/filesHelpers/WorkWithFiles'
import DropzoneContainer from "../Dropzone/DropzoneContainer";
import 'react-image-crop/dist/ReactCrop.css';
import ImageCrop from "react-image-crop-component";
import {connect} from "react-redux";
import {savePhoto} from "../../../redux/Reducers/ProfileReducer";
import c from "./ImgDropAndCrop.module.css"
import SubdirectoryArrowRightIcon from '@material-ui/icons/SubdirectoryArrowRight';
const imageMaxSize = 1000000000 // bytes
const acceptedFileTypes = 'image/x-png, image/png, image/jpg, image/jpeg, image/gif'
const acceptedFileTypesArray = acceptedFileTypes.split(",").map((item) => {
    return item.trim()
})

class ImgDropAndCrop extends Component {
    constructor(props) {
        super(props)
        this.fileInputRef = React.createRef()
        this.onCropped = this.onCropped.bind(this)
        this.state = {
            imgSrc: null,
            imgSrcExt: null,
            crop: {
                aspect: 1 / 1
            }
        }
    }
    componentDidUpdate(prevProps, prevState){
        if (prevProps.userAvatar != this.props.userAvatar){
            this.props.handleModalClose()
        }
    }
    verifyFile = (files) => {
        if (files && files.length > 0) {
            const currentFile = files[0]
            const currentFileType = currentFile.type
            const currentFileSize = currentFile.size
            if (currentFileSize > imageMaxSize) {
                alert("This file is not allowed. " + currentFileSize + " bytes is too large")
                return false
            }
            if (!acceptedFileTypesArray.includes(currentFileType)) {
                alert("This file is not allowed. Only images are allowed.")
                return false
            }
            return true
        }
    }

    handleOnDrop = (files, rejectedFiles) => {
        //console.log('handleOnDrop:', files, rejectedFiles)
        if (rejectedFiles && rejectedFiles.length > 0) {
            this.verifyFile(rejectedFiles)
        }

        if (files && files.length > 0) {
            const isVerified = this.verifyFile(files)
            if (isVerified) {
                // imageBase64Data
                const currentFile = files[0]
                const myFileItemReader = new FileReader()
                myFileItemReader.addEventListener("load", () => {
                    // console.log(myFileItemReader.result)
                    const myResult = myFileItemReader.result
                    const imgSrcExt = extractImageFileExtensionFromBase64(myResult)
                    this.setState({
                        imgSrc: myResult,
                        imgSrcExt: imgSrcExt,
                        imageFile: currentFile
                    })
                }, false)

                myFileItemReader.readAsDataURL(currentFile)

            }
        }
    }
    handleClearToDefault = event => {
        if (event) event.preventDefault()
        this.setState({
            imgSrc: null,
            imgSrcExt: null,
            imageCrop: null,
            crop: {
                aspect: 1 / 1
            }

        })
        this.fileInputRef.current.value = null
    }

    onCropped = (imageCrop) => {
        this.setState({
            imageCrop: imageCrop.image
        })
    }
    upload = () => {
        const base64FileString = this.state.imageCrop
        base64StringtoFile(base64FileString, 'avatar')
        const filePhotoCrop = base64StringtoFile(base64FileString, 'avatar.png')
        this.props.savePhoto(filePhotoCrop)
    }

    render() {
        const {imgSrc} = this.state
        return (
            <div className={c.editAreaWrapper}>
                <input style={{display: 'none'}} ref={this.fileInputRef} type='file' accept={acceptedFileTypes}
                       multiple={false} onChange={this.handleFileSelect}/>
                {imgSrc !== null ?
                    <>
                        <ImageCrop
                            maxWidth={300}
                            maxWidth={300}
                            square={true}
                            resize={true}
                            border={"dashed #ffffff 2px"}
                            onCrop={this.onCropped}
                            src={imgSrc}
                        />
                        <div className={c.controllsWrapper}>
                            {this.state.imageCrop ? <div className={c.imgPrevWrapper}>
                                <img className={c.imgPrev} src={this.state.imageCrop} alt=""/>
                            </div> : null}
                            <div className={c.buttonsControllsWrapper}>
                                <button onClick={this.upload}><SubdirectoryArrowRightIcon/> Upload</button>
                                <button onClick={this.handleClearToDefault}>Clear</button>
                            </div>
                        </div>
                    </>

                    :

                    <DropzoneContainer handleDropzone={this.handleOnDrop}/>
                }

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        userAvatar: state.ProfileReducer.profileInfo.photos.large
    }
}
export default connect(mapStateToProps, {savePhoto})(ImgDropAndCrop)