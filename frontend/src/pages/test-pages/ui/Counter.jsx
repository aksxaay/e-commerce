import React, { useState } from "react";

import styles from "./Counter.module.css";

import { useSelector, useDispatch } from "react-redux";
import {
  setCount,
  increment,
  decrement,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from "../../../redux/counterSlice";

const Counter = () => {
  // const count = useSelector((state) => state.counter.value);
  const count = useSelector(selectCount);

  const [incrementAmount, setIncrementAmount] = useState("2");

  const dispatch = useDispatch();
  return (
    <>
      <div>
        <div className={styles.row}>
          <button
            className={styles.button}
            aria-label="Increment value"
            onClick={() => {
              console.log("test-pages/ui/Counter.jsx onClick() => increment++");
              dispatch(increment());
            }}
          >
            +
          </button>
          <span className={styles.value}>{count}</span>
          <button
            className={styles.button}
            aria-label="Decrement value"
            onClick={() => {
              console.log("test-pages/ui/Counter.jsx onClick() => decrement++");
              dispatch(decrement());
            }}
          >
            -
          </button>
          <br className={"ml-2"} />
          <button
            type="reset"
            // className={styles.button}
            className={
              "appearance-none bg-none text-[32px] px-3 outline-none border-2 border-solid border-transparent text-[#704cb6] pb-1 cursor-pointer bg-[#704cb61a] rounded-[2px] transition-all duration-150 hover:border-2 hover:border-solid hover:border-[#704cb666] focus:border-solid focus:border-[#704cb666] active:bg-[#704cb633] ml-4"
            }
            onClick={() => dispatch(setCount(0))}
          >
            Reset
          </button>
        </div>
        <div className={styles.row}>
          <input
            className={styles.textbox}
            aria-label="Set increment amount"
            value={incrementAmount}
            onChange={(event) => setIncrementAmount(event.target.value)}
          />
          <button
            className={styles.button}
            onClick={() =>
              dispatch(incrementByAmount(Number(incrementAmount) || 0))
            }
          >
            Add Amount
          </button>
          <button
            className={styles.asyncButton}
            onClick={() => dispatch(incrementAsync(Number(increment) || 0))}
          >
            Add Async
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
