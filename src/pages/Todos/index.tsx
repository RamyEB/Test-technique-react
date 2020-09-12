import './index.scss';
import React, { useState, useEffect } from 'react';
import Page from 'components/Page';
import Counter from 'components/Counter'
import TodoElement from 'components/TodoElement'

interface data{
    title: string,
    content: string
}

const Todos = (): JSX.Element => {
    const [count, setCount] = useState(0);
    const [allClose, setAllClose] = useState(false);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    const addOne = ():void => {
        setCount(count + 1)
    }

    
    const removeOne = ():void => {
        setCount(count - 1)
    }

    const childCall = ():void => {
        setAllClose(true)
    }

    const url="https://api.npoint.io/af3a4dc8f99e5f5646ea"

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true); 
            setItems(result.Task);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )        
        if (allClose){
            setCount(0)
            setAllClose(false)
        }
    })
    console.log("items")
    console.log(items)
      if (error) {
        return <div>Erreur</div>;
      } else if (!isLoaded) {
        return <div>Chargement...</div>;
      } else {
    return(
    <Page className="Todos">
            <div className="CounterContainer">
            </div>
            <div className="TodosContainer">
                <div className="HeaderContainer">
                    <h2>TodoList</h2>
                    <Counter setAllToZero={childCall} nbOpenElement={count} />
                </div>
                <div className="TodosListContainer">
               
                {items.map((item:data) => (
                    <TodoElement key={item.title} content={item.content} title={item.title} allClose={allClose} addOne={addOne} removeOne={removeOne}/>
                 ))}

                </div>

            </div>
    </Page>
)}     
};
export default Todos;
