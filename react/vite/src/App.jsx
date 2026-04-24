const App = () => {

  // non-parametized function
  const clickHandle = () => {
    alert("Button clicked")
  }

  // parametized function
  const clickNew = (msg) =>{
    alert(msg)
  }
  const wrapperFn = () => clickNew("Bujh gye diye!");
  
  return (
    <>
      <div>APp</div>
      <div>World</div>
      <button onClick={clickHandle}>Click</button>
      {/* <button onClick={wrapperFn}>Click(param)</button> */}
      <button onClick={() => clickNew("Bujh gye diye!")}>Click(param)</button>

    </>
    
  )
}

export default App;
