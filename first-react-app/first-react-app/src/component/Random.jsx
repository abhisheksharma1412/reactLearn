function Random(){
    // let myName="Hardik Sharma";
    let random=Math.random()*100;
    return <h1 style={{'background-color':"blue"}}>
        {/* dynamic */}
        Random number ={Math.round(random)} 
        </h1>
}

export default Random;