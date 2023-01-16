import { Card, TextField,CardContent } from '@mui/material';
import React, { useState } from 'react';
import '../components/namecard.css'
import CancelIcon from '@mui/icons-material/Cancel';
import NameCard from './NameCard';

const AddedCard = ({data}) => {
    const [deleteCard, setDeleteCard] = useState(true);

    const onDeleteCard = () => {
        setDeleteCard(false)
        console.log(deleteCard)
    }
  return data.map((item, index) => {
   return <div className="namecard" key={index}>
        {deleteCard ? <Card style={{height: "130%"}}>
            <div className='closeIcon'>
                <CancelIcon className='close' onClick={onDeleteCard}  />
            </div>
            <CardContent>
                <form className='formfields'>
                    <h1> Name card created </h1>

                    <TextField type="text" name='name' className="form-control" required
                    value={item.name} disabled />

                    <TextField type="number" name='number' className="form-control" required
                    value={item.age} disabled />

                    <TextField type="number" name='phone' className="form-control" required 
                    value={item.phone} disabled />
                </form>
            </CardContent>
        </Card> : <NameCard />}
    </div>
  })
}

export default AddedCard;
