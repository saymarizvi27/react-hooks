# react-hooks

#THis project also explains the use Effect and how can you use them 

1) This can be used as a clean up function works for componentDidMount and componetUnMount life cycle 


  //RUNS ON LOAD OF PAGE AND RETURN STATEMENT RUNS BEFORE CONSOLE.LOG STATEMENT ON EACH RENDER OF THE PAGE when password changes, ALSO WHEN THE COMPONENT UNMOUNTS THE RETURN STATEMENT GETS EXECUTED 

  useEffect(()=>{ 
    console.log("CLEAN UP ---1");

    return ()=>{
      console.log("INSIDE CLEAN UP---1");
    };

  },[enteredPassword]);


2)  comp mounts also for every state update and every key stroke , after every render cycle 
   useEffect(()=>{
   console.log("EFFECT RUNNING "+
   "comp mounts also for every state update and every key stroke , after every render cycle ");
   });

3) On load of page only

  useEffect(()=>{
    console.log("EFFECT RUNNING comp mounts 123");
  },[]);

4) On load of page and on update of password

 useEffect(()=>{
    console.log("EFFECT RUNNING every time password chnages-------");
  },[enteredPassword]);


5) On load of page and on unmount of the components

  useEffect(()=>{
    console.log("CLEAN UP ---2");

    return ()=>{
      console.log("INSIDE CLEAN UP---2");
    };

  },[]);


  