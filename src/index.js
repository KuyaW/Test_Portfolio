import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./pages/Layout";

// import Home from "./pages/Home";
// import Blogs from "./pages/Blogs";
// import Contact from "./pages/Contact";
// import NoPage from "./pages/NoPage";

// import {useRef} from 'react';

// const MyAddTask = () => {
//     const text = useRef("");
//     const day = useRef("");
//     const reminder = useRef(false);

//     const submitForm = (e) =>{
//         e.preventDefault();

//         console.log(text.current.value);
//         console.log(day.current.value);
//         console.log(reminder.current.checked);
//     }
//   return (
//     <form onSubmit={submitForm}>
//         <input type="text" placeholder='Enter Text Here' ref={text}/>
//         <input type="text" placeholder='Enter Text Here' ref={day}/>
//         <input type="checkbox"  ref={reminder}/>

//         <input type="submit" value="Save" />
//     </form>
//   )
// }



// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="blogs" element={<Blogs />} />
//           <Route path="contact" element={<Contact />} />
//           <Route path="*" element={<NoPage />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);