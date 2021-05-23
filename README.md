# react-hooks

#THis project also explains the use Effect and how can you use them 

1) This can be used as a clean up function works for componentDidMount and componetUnMount life cycle 

  useEffect(()=>{
    //RUNS ON LOAD OF PAGE AND RETURN STATEMENT RUNS BEFORE CONSOLE.LOG STATEMENT ON EACH RENDER OF THE PAGE when password changes, 
    ALSO WHEN THE COMPONENT UNMOUNTS THE RETURN STATEMENT GETS EXECUTED  
    console.log("CLEAN UP ---1");

    return ()=>{
      console.log("INSIDE CLEAN UP---1");
    };

  },[enteredPassword]);
