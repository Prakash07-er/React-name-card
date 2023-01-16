import { Button, Card, TextField,CardContent } from '@mui/material';
import React, { useState } from 'react';
import '../components/namecard.css'

const NameCard = (props) => {
    const [name, setName] = useState("")
    const [age, setAge] = useState("");
    const [phone, setPhone] = useState("");

    const onChangeInput = e => {
        e.preventDefault();
        setName(e.target.value);
    }

    const onNameSubmit = (e) => {
        e.preventDefault();

        props.onSubmit({
          name,
          age,
          phone
        });
        setName('');
        setAge('');
        setPhone('');

    }

  return (
    <div className="namecard">
        <Card style={{height: "130%"}}>
            <CardContent>
                <form className='formfields' onSubmit={onNameSubmit}>
                    <h1> Name card </h1>

                    <TextField type="name" name='name' className="form-control" required placeholder="enter name" 
                    value={name} onChange={onChangeInput} />

                    <TextField type="number" name='number' className="form-control" required placeholder="enter age" 
                    value={age} onChange={(e) => setAge(e.target.value)} />

                    <TextField type="number" name='number' className="form-control" required placeholder="enter mobile number" autoComplete="on" 
                    value={phone} onChange={(e) => setPhone(e.target.value)}/>

                    <Button type="submit" variant="contained"> Add </Button>
                </form>
            </CardContent>
        </Card>
    </div>
  );
}

export default NameCard;
