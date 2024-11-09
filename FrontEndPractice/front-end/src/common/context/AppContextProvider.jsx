import MyContext from "./MyContext"

const AppContextProvider = ({ children }) => {

    return (
        <MyContext.Provider value={{}}>
            {children}
        </MyContext.Provider>
    )
}

export default AppContextProvider