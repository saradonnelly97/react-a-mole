import { useState } from 'react';
import MoleContainer from './MoleContainer';
import './App.css';

function App(){
    let [score, setScore] = useState(0)

    const createMoleHill = () => {
        let hills = []
        for (let i = 0; i < 9; i++) {
            hills.push(
                <MoleContainer
                
                setScore={setScore}
                score={score} />
            )
        }
    
        return (
            <div>
                {hills}
            </div>
        )
    }

    return (
        <div className="App">
          <center>
            <h1 style={{backgroundColor: "lightblue"}}>React-a-Mole!</h1>
            <p>Add a little style!</p>
            {score}
            {createMoleHill()}
            </center>
        </div>
    )
}

export default App

