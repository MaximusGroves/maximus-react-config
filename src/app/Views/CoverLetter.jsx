import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import ProfileCard from '../Components/ProfileCard';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';


import ResumePdf from '../../assets/data/MaxGrovesResume2019.pdf';

import { withStyles } from '@material-ui/core/styles';

const blankContent = {
  coverLetter: {
    title: "",
    description: "",
    repo: "",
    repoHost: "",
    body: []
  },
  aboutMe: {
    title: "",
    description: []
  },
  toDo: {
    title: "",
    description: []
  }
};

const style = theme => ({
  itemDone: {
    textDecoration: 'line-through',
    color: theme.palette.primary.main
  },

  itemPending: {

  },

  pushRight: {
    marginRight: 'auto'
  },
  pushLeft: {
    marginLeft: 'auto'
  },

  listPaper: {
    maxWidth: 800,
    margin: '0 auto',
    padding: 0
  },

  inputField: {
    width: '100%',
    display: 'block',
    maxWidth: 800,
    margin: '30px auto',
  },

  centerBtn: {
    display: 'block',
    margin: '0 auto'
  },

  itemText:{
    maxWidth: 'calc( 100% - 140px )',
    textAlign: 'center',

  }
});


const CoverLetter = props => {
  const {
    classes,
    ProfileCardProps,
    content,
    email,
    className,
    viewRef,
    createToDo,
    checkItem,
    handleDeleteToDo,
    toDoList,
    apiWaiting
  } = props;

  const useContent = content || blankContent;
  const { repo } = useContent.coverLetter;

  const [toDo, setToDo] = useState('');

  return (
    <div className={className} ref={viewRef} >
      <ProfileCard {...ProfileCardProps} email={email} repo={repo} />
      <Paper elevation={3} >
        <Typography variant="h4" >
          {useContent.coverLetter.title}
        </Typography>

        <Typography variant="body2">
          {useContent.coverLetter.description}
        </Typography>

        <Typography variant="body2">
          You may view the source for this page at <a href={useContent.coverLetter.repo} target="_blank">{useContent.coverLetter.repoHost}</a>
        </Typography>

        {useContent.coverLetter.body.map(text => (
          <Typography variant="body2">
            {text}
          </Typography>
        ))}

        <Typography variant="body2">
          Reach out at <a href={`mailto:${email}`} >{email}</a>
        </Typography>

        <Typography variant="body2">
          <a href={ResumePdf} target="_blank" >Download Resume</a>
        </Typography>


      </Paper>

      {/*<Paper elevation={3} >*/}
      {/*<Typography variant="h4" >*/}
      {/*{useContent.aboutMe.title}*/}
      {/*</Typography>*/}

      {/*{useContent.aboutMe.description.map(text=>(*/}
      {/*<Typography variant="body2">*/}
      {/*{text}*/}
      {/*</Typography>*/}
      {/*))}*/}

      {/*<Typography variant="body2">*/}
      {/*Please reach out for any reason to <a href={`mailto:${email}`} >{email}</a>*/}
      {/*</Typography>*/}


      {/*</Paper>*/}

      <Paper elevation={3} >
        <Typography variant="h4" >
          {useContent.toDo.title}
        </Typography>

        {useContent.toDo.description.map(text => (
          <Typography variant="body2">
            {text}
          </Typography>
        ))}


        <Paper elevation={3} className={classes.listPaper}>

          {toDoList.map((item, idx) => (

            <Grid container direction="row" justify="center" alignItems="center" >

              <Grid item className={classes.pushRight}>
                <Checkbox
                  checked={item.done}
                  onChange={e => (checkItem(item, e))}
                  color="primary"
                />
              </Grid>

              <Grid item className={classes.itemText}>
                <Typography className={item.done ? classes.itemDone : classes.itemPending}>
                  {item.description}
                </Typography>
              </Grid>

              <Grid item className={classes.pushLeft}>
                <IconButton onClick={e => (handleDeleteToDo(item._id, e))}><CloseIcon/></IconButton>
              </Grid>

              {(idx !== toDoList.length - 1) && <Divider style={{ width: '100%' }}/>}

            </Grid>
          ))}


        </Paper>

        <TextField
          value={toDo}
          onChange={e => setToDo(e.target.value)}
          variant="outlined"
          label="Add to this list"
          className={classes.inputField}
          fullWidth
          disabled={apiWaiting}
        />

        <Button
          onClick={e => {
            createToDo(toDo);
            setToDo('');
          }}
          color="primary"
          variant="contained"
          className={classes.centerBtn}
          disabled={apiWaiting}
        >
          Submit
        </Button>


      </Paper>
    </div>
  );
};


export default withStyles(style)(CoverLetter);
