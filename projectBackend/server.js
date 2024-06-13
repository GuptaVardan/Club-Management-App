import express  from "express"
import mongoose from "mongoose";
import cors from "cors"
import bodyParser from "body-parser"
const app = express()
const port = 3000
import { UserInsert } from "./models/insert.js";
import { Event } from "./models/events.js";

app.use(cors()) 
app.use(bodyParser.json())

let conn = await mongoose.connect("mongodb://localhost:27017/Club-Event-Management-App")
app.get('/', (req, res) => { 
    res.send('Hello World!')
})

app.get('/login_member', (req, res) => { 
    res.send('Hello World!')
})

app.get('/eventCreate', (req, res) => { 
  res.send('Hello World!')
})

app.get('/eventDeletion', (req, res) => { 
  res.send('Hello World!')
})

app.get('/events', async (req, res) => {
  try {
    const allEvents = await Event.find();
    res.send(allEvents); 
  } catch (error) {
    console.error("Error fetching events:", error);
    res.status(500).send("Internal server error");
  }
});

app.get('/login_admin', (req, res) => { 
    res.send('Hello World!')
})

app.post('/', async (req, res) => { 
    console.log(req.body)
    const User = await UserInsert.findOne({'username': req.body.username})
    const isJoined = User? true:false
    if (!isJoined) {
      const userInsert = new UserInsert(req.body)
      userInsert.save()
    } 
    res.send(isJoined)
    
})

app.post('/login_member', async (req, res) => {
    try {
      const user = await UserInsert.findOne(req.body);
      const loginCred = user ? true : false;
      console.log(loginCred)
      res.send(loginCred)
    } catch (error) {
      console.error("Error fetching user:", error);
      res.status(500).send("Internal server error");
    }
  });

  app.post('/login_admin', async (req, res) => {
    try {
      const user = await UserInsert.findOne(req.body);
      const loginCred = (user&&user.isAdmin)? true : false;
      console.log(loginCred)
      res.send(loginCred)
    } catch (error) {
      console.error("Error fetching admin:", error);
      res.status(500).send("Internal server error");
    }
  });

  app.post('/eventCreate', (req, res) => { 
    console.log(req.body)
    const event = new Event(req.body)
    event.save()
    res.send('Hello World!')
})

app.post('/eventDeletion', async (req, res) => {
  try {
    const event = await Event.findOne(req.body);
    const EveCred = event ? true : false;
    if(EveCred) {
      await event.deleteOne({title: req.body.title})
    }
    console.log(EveCred)
    res.send(EveCred)
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).send("Internal server error");
  }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})