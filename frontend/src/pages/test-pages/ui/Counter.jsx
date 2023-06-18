import React, { useState } from "react";

import styles from "./Counter.module.css";

const Counter = () => {
  const [increment, setIncrement] = useState(3);
  return (
    <>
      <div>
        <div className={styles.row}>
          <button
            className={styles.button}
            aria-label="Increment value"
            onClick={() => {
              console.log("test-pages/ui/Counter.jsx onClick() => increment++");
              setIncrement(increment + 1);
            }}
          >
            +
          </button>
          <span className={styles.value}>{increment}</span>
          <button
            className={styles.button}
            aria-label="Decrement value"
            onClick={() => {
              console.log("test-pages/ui/Counter.jsx onClick() => decrement++");
              setIncrement(increment - 1);
            }}
          >
            -
          </button>
          <br className={"ml-2"} />
          <button
            type="reset"
            // className={styles.button}
            className={
              "appearance-none bg-none text-[32px] px-3 outline-none border-2 border-solid border-transparent text-[#704cb6] pb-1 cursor-pointer bg-[#704cb61a] rounded-[2px] transition-all duration-150 hover:border-2 hover:border-solid hover:border-[#704cb666] focus:border-solid focus:border-[#704cb666] active:bg-[#704cb633]"
            }
          >
            Reset
          </button>
        </div>
        <div className={styles.row}>
          <input className={styles.textbox} aria-label="Set increment amount" />
          <button className={styles.button}>Add Amount</button>
          <button className={styles.asyncButton}>Add Async</button>
        </div>
      </div>
    </>
  );
};

export default Counter;
