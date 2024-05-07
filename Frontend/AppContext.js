import React, { createContext, useState } from "react";
import { useReducer } from "react";

// Create the context
export const AppContext = createContext();

const defaultUser = {
  currentUser: { seatStatus: false, seatOccupied: 0, roomOccupied: "" },
  timer: 0,
};

export const UserContext = createContext({
  currentUser: {},
  updateStatus: (user) => {},
  timer: 0,
});

const userReducer = (state, action) => {
  if (action.type === "UPDATE") {
    let updatedUser=state.currentUser;
    if (state.currentUser.seatStatus === true) {
      updatedUser = {
        ...state.currentUser,
        seatStatus: false,
        roomOccupied: "",
        seatOccupied: 0,
      };
      updatedTimer= 0;
    } else {
      updatedUser = {
        ...state.currentUser,
        seatStatus: true,
        roomOccupied: action.seat.room,
        seatOccupied: action.seat.seatNumber,
      };
      updatedTimer = Date.now();
    }
    return {
      currentUser: updatedUser,
      timer: updatedTimer,
    };
  }
};

const UserProvider = (props) => {
  const [userState, dispatchUserAction] = useReducer(userReducer, defaultUser);
  const updateStatusHandler = (seat) => {
    dispatchUserAction({ type: "UPDATE", seat: seat });
  };
  const userContext = {
    currentUser: userState.currentUser,
    timer: userState.timer,
    updateStatus: updateStatusHandler,
  };
  return (
    <UserContext.Provider value={userContext}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;

// Create a provider component
export const AppProvider = ({ children }) => {
  // Provide the context value to the children components
  return <AppContext.Provider>{children}</AppContext.Provider>;
};
