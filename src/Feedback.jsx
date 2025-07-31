import { useState } from "react";

//error when i filter the rates then hit submit, i loose the origin rates.


function Feedback(){
    const [name,setName] =useState();
    const [rate,setRate] = useState(5);
    const [messege,setMessege] = useState();
    const [rates,setRates] = useState([{name:'fares',rating:'5',messege:'the website is amazing i loved that!!!'}])
    const [tempRates,setTempRates] = useState(rates);


    function handleChangeUsername(e){
        setName(e.target.value);
    }

    function handleChangeMessege(e){
        setMessege(e.target.value);
    }

    function handleChangeRate(e){
        setRate(e.target.value);
    }

    function submit(){
       
        const newRate = {name:name,rating:rate,messege:messege};
        
        setRates([...tempRates,newRate])
        document.getElementsByTagName("input")[0].value = '';
        document.getElementsByTagName('textarea')[0].value = '';

        const tRates = [...rates,newRate];
        setTempRates(tRates);
        console.log(rates)

        
        

        


    }

    

    function all(){
        if (tempRates !== null) {setRates([...tempRates])};
    }

    function five(){
        const filtred = tempRates.filter( r => r.rating=='5');
        setRates([...filtred]);
    }

    function four(){
        const filtred = tempRates.filter( r => r.rating=='4');
        setRates([...filtred]);
    }

    function three(){
        const filtred = tempRates.filter( r => r.rating=='3');
        setRates([...filtred]);
    }

    function two(){
        const filtred = tempRates.filter( r => r.rating=='2');
        setRates([...filtred]);
    }

    function one(){
        const filtred = tempRates.filter( r => r.rating=='1');
        setRates([...filtred]);
    }



    return(
    <div>
        <div>
            <span>Username:</span>
            <input type="text" onChange={handleChangeUsername} />
        </div>
        <form action="">
            <span>Rating:</span>
            <select name="rate" id="rate" value={rate} onChange={handleChangeRate}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </form>

        <div>
            <span>Messege:</span>
            <br />
            <textarea name="messege" id="messege" onChange={handleChangeMessege}></textarea>
        </div>

        <button onClick={submit} className="submit-button">Sumbit Rating</button>


        <h1>Rates:</h1>
        <button className="All" onClick={all}>All</button>
        <button className="five" onClick={five}>5⭐</button>
        <button className="four" onClick={four}>4⭐</button>
        <button className="three" onClick={three}>3⭐</button>
        <button className="two" onClick={two}>2⭐</button>
        <button className="one" onClick={one}>1⭐</button>

        <ul>{rates.map((e,i)=>{
            return <li key={i} >{e.rating}⭐|{e.name}:" {e.messege} "</li>
        })}</ul>
        


    </div>
        
    )
}

export default Feedback;