import React,{createContext,useContext,useState} from 'react';

const StateContext=createContext();

const intialState={chat:false,cart:false,userProfile:false,notification:false}

export const ContextProvider = ({children}) =>{
    const [activeMenu,setActiveMenu]=useState(true);
    const [isClicked,setIsClicked]=useState(intialState);
    const [screenSize,setScreenSize]=useState(undefined)
    const [currentColor, setCurrentColor] = useState('#03C9D7')
    const [currentMode, setCurrentMode] = useState('Light')
    const [themeSettings, setThemeSettings] = useState(false)

    const setMode=(mode)=>{
        console.log(mode.target.value)
        setCurrentMode(mode.target.value);
        localStorage.setItem('themeMode',mode)
    };
    const setColor=(mode)=>{
        setCurrentColor(mode);
        console.log(mode)
        localStorage.setItem('colorMode',mode)
    };

    //dynamic updating
    const handleClick = (clicked) =>{
        //copies all elements of intial state as it is and updates clicked
        setIsClicked({...intialState,[clicked]:true})
    }
    return(
        <StateContext.Provider value={{activeMenu,setActiveMenu,
                                       isClicked,setIsClicked,
                                       handleClick,
                                       screenSize,setScreenSize,
                                       currentColor,setCurrentColor,
                                       currentMode,setCurrentMode,
                                       themeSettings,setThemeSettings,
                                       setMode,setColor
                                    }}>
            {children}
        </StateContext.Provider>
    )
}
export const useStateContext=()=>useContext(StateContext)
