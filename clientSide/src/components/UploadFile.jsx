import { InboxOutlined } from "@ant-design/icons";
import { Upload } from "antd";
import axios from "axios";
import React, { useState } from "react";
const { Dragger } = Upload;

export const UploadFile = ({
  listType,
  accept,
  multiple,
  maxCount,
  name,
  onChange,
  value,
}) => {
  const [fileList, setFileList] = useState([]);

  const customRequest = async (options) => {
    const { onSuccess, onError, file, onProgress } = options;

    const formData = new FormData();
    formData.append("file", file);

    const headers = {
      "Content-Type": "multipart/form-data",
    };
    onSuccess(file); // Delete after creating the api
    setFormData(file); // Delete after creating the api
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BE_URL}/uploads`,
        formData,
        {
          headers: headers,
          onUploadProgress: (event) => {
            const percent = (event.loaded / event.total) * 100;
            // onProgress({ percent }); // Remove comment after creating the api
          },
        }
      );
      if (response.data.status === "success") {
        // response.data= {status : 'success', message :'File uploaded successfully', name => 'file_name'}
        onSuccess(response.data, file);
        setFormData(response.data);
        onChange(response.data.name);
      } else {
        onError(response.data);
      }
    } catch (err) {
      // onError(err); // Remove comment after creating the api
    }
  };
  const setFormData = (file) => {
    if (value) {
      value.push(file.name);
    } else {
      value = [file.name];
    }
    onChange(value);
  };
  const handlePreview = async (file) => {
    if (file.url) {
      window.open(file.url, "_blank");
    } else {
      const previewUrl = await URL.createObjectURL(file.originFileObj);
      window.open(previewUrl, "_blank");
    }
  };
  return (
    <Dragger
      customRequest={customRequest}
      listType={"picture"}
      accept={accept}
      multiple={multiple}
      maxCount={maxCount}
      name={name}
      onPreview={handlePreview}
      onRemove={(e) => {
        onChange(null);
      }}
    >
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">
        Click or drag file to this area to upload
      </p>
      <p className="ant-upload-hint">Support for a single or bulk upload.</p>
    </Dragger>
  );
};
