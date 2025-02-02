import { useState } from 'react';
import './App.css';
import { CounterButton } from "./custom-components/counter.js";
import { CustomList } from "./custom-components/listComponent.js";
import { FocusField } from "./custom-components/useref.js";
import { ClickScroll } from "./custom-components/clickScroll.js";
import { UserData } from "./custom-components/fetchingAPIData.js";

export default function App() {

  /**second assignment**/
  const [message, setMessage] = useState("Something");

  function sendingMessage(event) {
    if (event.key === "Enter") {
      setMessage(event.target.value);
    }
  }

  /**third assignment**/
  const arr = [
    { id: 1, text: "Moiz", isPlaced: true },
    { id: 2, text: "Arman", isPlaced: false },
    { id: 3, text: "Huzefa" },
    { id: 4, text: "Arif", isPlaced: true },
    { id: 5, text: "Moiz", isPlaced: true },
    { id: 6, text: "Arman", isPlaced: false },
    { id: 7, text: "Huzefa" },
    { id: 8, text: "Arif", isPlaced: true },
    { id: 9, text: "Moiz", isPlaced: true },
    { id: 10, text: "Arman", isPlaced: false },
    { id: 11, text: "Huzefa" },
    { id: 12, text: "Arif", isPlaced: true },
  ]

  /** Driver Function **/
  return (
    <>
      {/**  first assignment **/}
      <h3>Assignment 1</h3>
      <CounterButton></CounterButton>
      <CounterButton></CounterButton>
      <hr />
      <h3>Assignment 2</h3>
      <Sender onKeyDown={sendingMessage}></Sender>
      <Receiver message={message}></Receiver>
      <hr />
      <h3>Assignment 3</h3>
      <CustomList array={arr}></CustomList>
      <hr />
      <h3>Assignment 4</h3>
      <FocusField></FocusField>
      <hr />
      <ClickScroll></ClickScroll>
      <hr />
      <h3>Assignment 5</h3>
      <UserData></UserData>
    </>
  );



  function Sender({ onKeyDown }) {
    return (
      <input type="text" placeholder="Type a Message" onKeyDown={onKeyDown} className='inpMessage' />
    );
  }


  function Receiver({ message }) {
    return (
      <h2>Message: {message}</h2>
    );
  }
}