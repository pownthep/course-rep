import React, { useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import UploadTask from "./UploadTask";
import { useRouter } from "next/router";

export default function UploadZone({ firebase }) {
  const storageRef = firebase.storage.ref();
  const taskState = firebase.TaskState;
  const [files, setFiles] = React.useState([]);
  const router = useRouter();

  const onDrop = useCallback((acceptedFiles) => {
    setFiles((prev) => [...acceptedFiles, ...prev]);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  useEffect(() => {
    const unsubscribe = firebase.auth.onAuthStateChanged(function (user) {
      if (user) {
      } else {
        router.push("/");
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      <div
        {...getRootProps()}
        className={`drop-zone ${isDragActive ? "box-shadow" : ""}`}
      >
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
          return (
            <UploadTask
              key={file.name}
              file={file}
              storageRef={storageRef}
              taskState={taskState}
            />
          );
        })}
      </div>
    </>
  );
}
