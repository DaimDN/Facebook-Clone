import React, {Ref} from 'react'
import ReactDOM from 'react-dom';
import Navbar from './components/navbar'
import {TextField} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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








 function Index() {

    const [formData, setFormData] = React.useState({
        name: '',
        email: ''
    });

    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });



    function Handler(e){

        console.log(formData);
        

        e.preventDefault();


    }






    return (
        <div style={{backgroundColor:'#F0F2F5', height: '800px', marginTop: '-120px'}}>

        <div className="container">


        <div className="row">


            <div className="col-6" style={{ marginTop: '44vh'}}>
            <div className="">

                <img style={{width: '70%', marginLeft: '-30px'}}  src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="facebook" />
                <br/>
                <div style={{marginRight: '10vw'}}>
                <h3>Facebook helps you connect and share with the people in your life.</h3>
                </div>
               </div>
            </div>
            <div className="col-6">
            <div className="mx-auto" style={{width: '73%', marginTop: '44vh'}}>
          
            <Card className={classes.root} variant="outlined" style={{boxShadow: '0px 0px 6px 1px #A0A6Ab', borderRadius: '10px'}}>
            <CardContent>
            <form onSubmit={Handler}>

            <TextField style={{width: '100%'}} id="outlined-basic" name="name" onChange={onChange} label="Enter email or phone number" variant="outlined" />
            <br/>
            <br/>
            <TextField  style={{width: '100%'}} id="outlined-basic" name="email" onChange={onChange} label="Enter password " variant="outlined" />
            <br/>
            <br/>
            

            <button style={{width: '100%', fontWeight: '700'}} className="btn btn-primary btn-lg btn-block" type="submit">Login</button>


            </form>
            <br/>
            <div className="text-center">
            <a style={{textDecoration: 'none'}}  href="/"> <p style={{fontSize: '14px', color: '#1762c4'}}> Forgotton password?</p></a>
            </div>
            <hr/>
           
           <div className="mx-auto text-center">
           <button  style={{width: '60%', fontWeight: '600', fontSize: '17px', backgroundColor: '#36A420', color: 'white'}} className="btn btn-info btn-lg" type="submit">Create New Account</button>



           </div>


           </CardContent>
          </Card>
          <br/>
          <p style={{fontSize: '14px'}}><a style={{textDecoration: 'none'}} href="https://en-gb.facebook.com/pages/create/?ref_type=registration_form"><b>Create a Page </b></a> for a celebrity, band or business.</p>
          
         
           
        </div>
            </div>
        </div>
        
       
        </div>
        </div>
    )
}



ReactDOM.render(<Index/>, document.getElementById('root'));