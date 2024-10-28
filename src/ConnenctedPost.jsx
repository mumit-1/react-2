export default function ConnectedPost({info}) {
    const {id,title,body}= info
   const box ={
    border:"2px solid red",
    borderRadius : "15px",
    margin:"10px",
    padding:"15px"
   }
    return(
        <>
        <div style={box}>
            <h3>id:{id}</h3>
            <h3>title:{title}</h3>
            <h3>Body:{body}</h3>
        </div>
        
        </>
    )
    
}