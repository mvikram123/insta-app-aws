import React,{useState} from "react";
import AWS from "aws-sdk";
import nature from "../images/nature.jpg";


const ImageUpload=()=>{
    let[file,setFile]=useState("");
    let[imgLink,setImgLink]=useState(null);

    AWS.config.update({

        accessKeyId:"AKIA3LINBZ27SE7NW5BB",
        secretAccessKey:"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",
        region:"ap-south-1"


    })


    async function uploadFile(){

        const s3=new AWS.S3();
        let fileName=`${Date.now()}-${file.name}`;
        try{
            const response=await s3.putObject({
                bucket:"React-app",
                Key:fileName,
                Body:file,
                ContentType:file.name,
               
            }).promise()
             setImgLink(`   ${file.name}`)


        }
        catch(error){
            console.log(error.message);
        }

    }


    return (
        <div>
            <input type="file" onChange={e=>setFile(e.target.files[0])}/>
            <button onClick={uploadFile}>upload</button>

        </div>
    )
}
export default ImageUpload;