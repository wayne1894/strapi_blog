import React, { useState } from "react";
import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';
import './quill.snow.css';


const Editor = ({ onChange, name, value }) => {
 
 const modules = {
   toolbar: [
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      [ 'blockquote', 'code-block'],               // custom button values
      [{ 'color': [] }, { 'background': [] },{ 'align': [] }],  
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
//      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      ['link','image','video'],
      ['clean']                                         // remove formatting button
    ],
 }

 
 return (
   <ReactQuill
     theme="snow"
     value={value}
     modules={modules}
     onChange={(content, event, editor) => {
       onChange({ target: { name, value: content } });
     }}/>
 );
};
 
export default Editor;