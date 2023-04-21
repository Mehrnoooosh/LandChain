import React, { useEffect, useRef, useState } from "react";
import CKEditor from "react-ckeditor-component";
import localforage from "localforage";
export const Ckeditor = (props) => {
  const { onChange, value } = props;

  function handleFileUploadResponse(evt) {
    evt.stop();

    // Get XHR and response.
    var data = evt.data,
      xhr = data.fileLoader.xhr,
      response = xhr.response.split("|");
    if (response[1]) {
      // An error occurred during upload.
      data.message = response[1];
      evt.cancel();
    } else {
      if (response[0]) data.url = response[0].replace(/"/g, "");
    }
  }
  const config = {
    height: 500,
    filebrowserUploadUrl: `${process.env.REACT_APP_BE_URL}/settings/upload`,
    filebrowserUploadMethod: "xhr",
    contentsLangDirection: "rtl",
  };
  const handleChange = (event) => onChange(event.editor.getData());
  const handleInstanceReady = async (editor) => {
    let token = await localforage.getItem("token");
    editor.editor.config.fileTools_requestHeaders = {
      "X-Requested-With": "XMLHttpRequest",
      Authorization: `Bearer ${token}`,
    };
  };

  return (
    <CKEditor
      config={config}
      content={value}
      events={{
        change: handleChange,
        instanceReady: handleInstanceReady,
        fileUploadResponse: handleFileUploadResponse,
      }}
    />
  );
};
