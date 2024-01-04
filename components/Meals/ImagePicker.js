"use client"
import classes from "./ImagePicker.module.css"
import {useRef, useState} from "react";
import Image from "next/image";

export default function ImagePicker({label, name}){
    const [pickedImage, setPickedImage] = useState();
    const inputRef = useRef(null)


    function handlePickClick() {
        inputRef.current.click()
    }

    function handleImageChange(event) {
        const file = event.target.files[0];

        if(!file) {
            setPickedImage(null)
            return;
        }

        const fileReader = new FileReader()

        fileReader.onload = () => {
            setPickedImage(fileReader.result)
        }

        fileReader.readAsDataURL(file)
    }



    return <div className={classes.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={classes.controls}>
            <div className={classes.preview}>
                {!pickedImage ? <p>No image picked yet.</p> : <Image src={pickedImage} alt={"the image selected by the user."} fill />}
            </div>
            <input required id={name} type={"file"} accept={"image"} name={name} className={classes.input} ref={inputRef} onChange={handleImageChange}/>
            <button className={classes.button} type={"button"} onClick={handlePickClick}>Pick an Image</button>
        </div>
    </div>
}