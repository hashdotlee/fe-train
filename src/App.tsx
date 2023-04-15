import List from './containers/List'
import Detail from './components/Detail'
import './App.css';
import { useState } from 'react';
import { ItemType } from './components/ListItem';


function App() {
    const [item, setItem] = useState<ItemType>({
        id: "",
        title: "",
        desc: "",
        priority: 0,
        duedate: ""
        });
  return (
    <div className="App">
    <List onSetId={setItem}/>
    <Detail {...item}/>
    </div>
  )
}

export default App
