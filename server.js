var sid='ACeba01bddde27d973b5aae008b6c5b920';
var auth_token='21c8cacae1e0efdc77e5e15f28b8eaed';

var twilio=require('twilio')(sid, auth_token);
twilio.messages.create({
    from:"+16592772971",
    to:'+917605867452',
    body:"hello"
})

.then((res)=>{
console.log("success");
})
.catch((err)=>{
    console.log("error");
});
