import React from 'react';
import './App.css';
import * as Prose from './prose.json'
import * as About from './about.json'

const about = About.description
const proseList = Prose.list.map(x=><li key={x.id}><a href={x.url}>{x.title}</a><p>{x.date}</p></li>)
console.log(proseList)

function App() {
  return (
    <div className="App">
      <div className={"container"}>
        <div className={"title"}>isinya cerpen</div>
        <div className={"about"}><p>{About.description}</p></div>
        <div className={"prose"}>
          <ul>
            {proseList}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
