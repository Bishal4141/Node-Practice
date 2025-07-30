import { createReadStream} from 'fs';

const stream = createReadStream('./text.txt', {highWaterMark: 90000, encoding: 'utf-8'});

stream.on("data", (data)=>{
    console.log(data);
});

// 👇 We also have "error" event, which will fire if we have error
stream.on("error", (err)=> {console.log(err)});