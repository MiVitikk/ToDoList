import { useState } from 'react'

import './App.css'
import TodoList from './TodoList'
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Tab, Tabs} from "@mui/material";
import {TabPanel} from "@mui/lab"
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import Box from '@mui/material/Box';


function App() {
  const [value, setValue] = useState('1');

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    
    <Container maxWidth="xl">
      <h1>My Todolist</h1>
      <CssBaseline />
      <AppBar position="static" color="transparent">
      <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{width:'100%' ,borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="tabs">
            <Tab label="Hello" value="1" />
            <Tab label="ToDos" value="2" />
            
          </TabList>
        </Box>
        <TabPanel value="1">Hello</TabPanel>
        <TabPanel value="2"><TodoList />
        <Toolbar>
          <Typography variant="h6">
            My Todos
          </Typography>  
        </Toolbar></TabPanel>
        
      </TabContext>
    </Box>
        

        
      </AppBar>
      
    </Container>
  )
}

export default App
