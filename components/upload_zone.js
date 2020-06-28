import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import UploadTask from "./upload_task";

export default function UploadZone({ firebase }) {
  const storageRef = firebase.storage.ref();
  const taskState = firebase.TaskState;
  const [files, setFiles] = React.useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    setFiles((prev) => [...prev, ...acceptedFiles]);
    // acceptedFiles.forEach((file) => {
    //   setCurrentUploadText(file.name);
    //   setTimeout(() => {
    //     setCurrentUploadText("Done!");
    //   }, 3000);
    //     const fileName = file.name;
        // var uploadTask = storageRef.child(fileName).put(file);
        // // Register three observers:
        // // 1. 'state_changed' observer, called any time the state changes
        // // 2. Error observer, called on failure
        // // 3. Completion observer, called on successful completion
        // uploadTask.on(
        //   "state_changed",
        //   function (snapshot) {
        //     // Observe state change events such as progress, pause, and resume
        //     // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        //     var progress =
        //       (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        //     console.log("Upload is " + progress + "% done");
        //     switch (snapshot.state) {
        //       case taskState.PAUSED: // or 'paused'
        //         console.log("Upload is paused");
        //         break;
        //       case taskState.RUNNING: // or 'running'
        //         console.log("Upload is running");
        //         break;
        //     }
        //   },
        //   function (error) {
        //     // Handle unsuccessful uploads
        //   },
        //   function () {
        //     // Handle successful uploads on complete
        //     // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        //     uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
        //       console.log("File available at", downloadURL);
        //     });
        //   }
        // );
    // });
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <>
      <div {...getRootProps()} className="drop-zone">
        <input {...getInputProps()} className="file-input" />

        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>
      <div className="files-list">
        <p>
          <strong>Uploading...</strong>
        </p>
        {files.map((file, index) => {
          console.log(file);
          return <UploadTask key={index} file={file} storageRef={storageRef} taskState={taskState}/>;
        })}
      </div>
    </>
  );
}
