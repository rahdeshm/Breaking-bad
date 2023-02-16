import React from 'react';
import './CharacterListItems.scss'

function CharacterListItems({item}) {
    // console.log(item);
   const {name,img,status,nickname,portrayed,birthday}=item;
//    console.log(img);
  return (
    <div className="card">
        <div className="card-inner">
            <div className="card-front">
                    <img className='characterImg' src={img} alt='actor img'/>
            </div>
            <div className="card-back">
                <span className='characterName'> {name}</span>
                <ul>
                    <li>
                        <strong>Actor name:</strong>{portrayed}
                    </li>
                    <li>
                        <strong>Nick name:</strong>{nickname}
                    </li>
                    <li>
                        <strong>Birth date:</strong>{birthday}
                    </li>
                    <li>
                        <strong>Status:</strong>
                        <span style={ {color: status==='Alive'? 'green' :'red'}}>
                            {item.status}
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default CharacterListItems