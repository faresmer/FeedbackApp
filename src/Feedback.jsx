import { useState } from "react";

function Feedback() {
    const [name, setName] = useState("");
    const [rate, setRate] = useState(5);
    const [messege, setMessege] = useState("");
    const [allRates, setAllRates] = useState([
        { name: 'fares', rating: '5', messege: 'the website is amazing i loved that!!!' }
    ]);
    const [rates, setRates] = useState(allRates);

    function handleChangeUsername(e) {
        setName(e.target.value);
    }

    function handleChangeMessege(e) {
        setMessege(e.target.value);
    }

    function handleChangeRate(e) {
        setRate(e.target.value);
    }

    function submit() {
        const newRate = { name, rating: rate, messege };
        const updatedAllRates = [...allRates, newRate];
        setAllRates(updatedAllRates);
        setRates(updatedAllRates); // Show all after submit
        setName("");
        setMessege("");
        document.getElementsByTagName("input")[0].value = '';
        document.getElementsByTagName('textarea')[0].value = '';
    }

    function all() {
        setRates([...allRates]);
    }

    function five() {
        setRates(allRates.filter(r => r.rating === '5'));
    }

    function four() {
        setRates(allRates.filter(r => r.rating === '4'));
    }

    function three() {
        setRates(allRates.filter(r => r.rating === '3'));
    }

    function two() {
        setRates(allRates.filter(r => r.rating === '2'));
    }

    function one() {
        setRates(allRates.filter(r => r.rating === '1'));
    }

    return (
        <div>
            <div>
                <span>Username:</span>
                <input type="text" onChange={handleChangeUsername} />
            </div>
            <form>
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
            <ul>
                {rates.map((e, i) => (
                    <li key={i} className="fade-in" style={{ animationDelay: 0.2 }}>
                        {e.rating}⭐|{e.name}:" {e.messege} "
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Feedback;