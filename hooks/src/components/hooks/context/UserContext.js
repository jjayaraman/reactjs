import React from 'react'

const UserContext = React.createContext({})

export const UserContextProvider = UserContext.Provider;

export const UserContextConsumer = UserContext.Consumer;

export default UserContext;