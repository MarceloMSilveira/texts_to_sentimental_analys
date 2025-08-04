import express from 'express';
import cors from 'cors';
import path from 'path';

const __dirname = import.meta.dirname;
console.log(__dirname);


const app = express();
const port = 3003;
app.use(cors());
app.use(express.static('public'));

app.get('/',(req,res) => {
  res.send('teste');
})

app.get('/otimista', (req,res)=>{
    res.sendFile(path.join(__dirname,'public/otimista.html'));
})

app.get('/pessimista', (req,res)=>{
    res.sendFile(path.join(__dirname,'public/pessimista.html'));
})

app.get('/neutro', (req,res)=>{
    res.sendFile(path.join(__dirname,'public/neutro.html'));
})

app.listen(port,()=>{
  console.log(`Mock API rodando em : ${port}`)
})
