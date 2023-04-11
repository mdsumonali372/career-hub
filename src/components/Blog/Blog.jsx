import React from "react";

const Blog = () => {
  return (
    <div className="mb-20">
      <div className="bg-gradient-to-r from-[#f9f9ff] to-[#faf8ff] py-36">
        <h2 className="text-center text-3xl text-[#1A1919] font-extrabold">
          Applied Jobs
        </h2>
      </div>
      <div className="px-14 mt-20 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-purple-400 p-8 rounded-lg">
          <h2 className="text-xl font-bold text-purple-200">
            When should you use context API?
          </h2>
          <p className="text-purple-50 mt-5 text-justify">
            Context API in React is used to manage application state that needs
            to be shared between different components. It allows passing data
            through the component tree without having to pass props down
            manually at every level.
          </p>
        </div>
        <div className="bg-purple-400 p-8 rounded-lg">
          <h2 className="text-xl font-bold text-purple-200">
            What is a custom hook?
          </h2>
          <p className="text-purple-50 mt-5 text-justify">
            Custom hooks can be used for a variety of purposes, such as managing
            state, fetching data from an API, handling browser events, and more.
            They are reusable across different components and can be easily
            shared across different parts of your application.
          </p>
        </div>
        <div className="bg-purple-400 p-8 rounded-lg">
          <h2 className="text-xl font-bold text-purple-200">What is useRef?</h2>
          <p className="text-purple-50 mt-5 text-justify">
            useRef(initialValue) is a built-in React hook that accepts one
            argument as the initial value and returns a reference (aka ref). A
            reference is an object having a special property current.
          </p>
        </div>
        <div className="bg-purple-400 p-8 rounded-lg">
          <h2 className="text-xl font-bold text-purple-200">
            What is useMemo?
          </h2>
          <p className="text-purple-50 mt-5 text-justify">
            useMemo is a built-in hook in React that allows you to memoize a
            value, which means that you can store the result of a computation
            and only recompute it when its dependencies change. This can be
            useful when you have a computationally expensive function that needs
            to be called frequently, or when you need to optimize the
            performance of your component by reducing unnecessary re-renders.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
