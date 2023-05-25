/* eslint-disable @typescript-eslint/no-explicit-any */
// import 'codemirror/lib/codemirror.css';
// import 'codemirror/theme/material.css';
// import 'codemirror/mode/javascript/javascript';
"use client"
 
import React, { useState } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import mockRouter from 'next-router-mock';


interface BlogPost {
  title: string;
  content: string;
  code: string;
}
export default function Post() {
  const [blogPost, setBlogPost] = useState<BlogPost>({
    title: '',
    content: '',
    code: '',
  });

  

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBlogPost({ ...blogPost, title: event.target.value });
  };

  const handleContentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setBlogPost({ ...blogPost, content: event.target.value });
  };

  const handleCodeChange = (_editor: any, _data: any, value: string) => {
    setBlogPost({ ...blogPost, code: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // code to submit blog post
    // once the blog post is submitted, navigate back to the blog list page
    void mockRouter.push('/blog-list');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={blogPost.title}
            onChange={handleTitleChange}
          />
        </div>
        <div>
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            name="content"
            value={blogPost.content}
            onChange={handleContentChange}
          />
        </div>
        <div>
          <label htmlFor="code">Code</label>
          <CodeMirror
            value={blogPost.code}
            options={{
              mode: 'javascript',
              theme: 'material',
              lineNumbers: true,
            }}
            onBeforeChange={(editor: any, data: any, value: string) => {
              handleCodeChange(editor, data, value);
            }}
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            onChange={(_editor: any, _data: any, _value: any) => {}}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
