
import React, {Ref, Fragment} from 'react'
import Navbar from '../components/navbar'
import {TextField} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';


const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
export default function Register() {

    function Handler(e){

        e.preventDefault();

    }

    function onChange(){

    }
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    const currencies = [
        {
          value: 'USD',
          label: '$',
        },
        {
          value: 'EUR',
          label: '€',
        },
        {
          value: 'BTC',
          label: '฿',
        },
        {
          value: 'JPY',
          label: '¥',
        },
      ];

      const [currency, setCurrency] = React.useState('20');

      function handleChange(){

      }
    return (
        <div>
             <Card className={classes.root} variant="outlined" style={{boxShadow: '0px 0px 6px 1px #A0A6Ab', borderRadius: '10px', width: '60%'}}>
            <CardContent>
            <div className='ml-auto' style={{textAlign: 'left'}}>
            <h1 style={{fontWeight: '600'}}>Sign Up</h1>
            <p>it's quick and easy</p>
            <hr/>
            </div>
            <form onSubmit={Handler}>

           <div className="row">
           <div className="col-6">
           <TextField  style={{width: '100%'}} id="outlined-basic" name="name" onChange={onChange} label="First Name" variant="outlined" />
          
           </div>
           
           <div className="col-6">

           <TextField  style={{width: '100%'}} id="outlined-basic" name="name" onChange={onChange} label="Surname" variant="outlined" />
           </div>
           <br/>
            </div>
            <br/>
            <TextField type="text" style={{width: '100%'}} id="outlined-basic" name="Mobile Number or Email" onChange={onChange} label="Mobile Number or Email " variant="outlined" />
            <br/>
            <br/>
            <TextField type="password" style={{width: '100%'}} id="outlined-basic" name="New Password" onChange={onChange} label="New password " variant="outlined" />
            <br/>
           <hr/>
            <p style={{fontSize: '12px'}}>By clicking Sign Up, you agree to our Terms. Learn how we collect, use and share your data in our Data Policy and how we use cookies and similar technology in our Cookie Policy. You may receive SMS notifications from us and can opt out at any time.</p>
           
           <div className="row">
               <div className="col-4">
               <TextField
                    id="outlined-select-currency"
                    select
                    label=""
                    value="20"
                    onChange={handleChange}
                    
                    helperText="Date of Birth"
                    variant="filled"
                    >{currencies.map((option) => (
                        <option key={option.value} value={option.value}>
                        {option.label}
                        </option>
                    ))}</TextField>
               </div>
               <div className="col-4">
               <TextField
                    id="outlined-select-currency"
                    select
                    label=""
                    value={currency}
                    onChange={handleChange}
                    
                    helperText="Date of Birth"
                    variant="filled"
                    >{currencies.map((option) => (
                        <option key={option.value} value={option.value}>
                        {option.label}
                        </option>
                    ))}</TextField>
               </div>
               <div className="col-4">
               <TextField
                    id="outlined-select-currency"
                    select
                    label=""
                    value={currency}
                    onChange={handleChange}
                    
                    helperText="Date of Birth"
                    variant="filled"
                    >{currencies.map((option) => (
                        <option key={option.value} value={option.value}>
                        {option.label}
                        </option>
                    ))}</TextField>
               </div>
           </div>
           
        <div className="mx-auto text-center">
        <button  style={{width: '60%', fontWeight: '600', fontSize: '17px', backgroundColor: '#36A420', color: 'white'}} className="btn btn-info btn-lg" type="submit">Create New Account</button>



        </div>


           
            </form>
           
           

           </CardContent>
          </Card>
        </div>
    )
}
