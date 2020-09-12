import './index.scss';
import React, { useState } from 'react';

type Props = {
  addOne: () => void,
  removeOne: () => void,
  allClose: boolean,
  title: string,
  content: string
};

const TodoElement = ( {addOne, removeOne, allClose, title, content} : Props): JSX.Element => {

  const [open, setOpen] = useState(false);
  const closeCard = (): void => {
    if(open){
      setOpen(false)
      removeOne()
    }
  }

  const openCard = (): void => {
    if(!open){
    setOpen(true)
    addOne()
  }
  }

  var openContent = <div></div>

  if(open && !allClose){
    openContent =  <div className="Container"><p>{content}</p><div className="ButtonContainer"><button className="close" onClick={closeCard}>Fermer</button></div></div>
  }
  else{
    openContent = <div></div>
     closeCard()
  }

  return (
    <div>
      <div className="Card" >
        <h2 onClick={openCard}>{title}</h2>
        {openContent}
      </div>
    </div>
   
  );
};

export default TodoElement;
