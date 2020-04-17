const keys = require("./keys")
const redis = require("redis")

const redisClient = redis.createClient({
    host: keys.redisHost,
    port:keys.redisPort,
    retry_strategy:() => 1000
})

const sub = redisClient.duplicate();
function fid(index)
{
    if(index < 2) 
    {console.log(index) 
        return 1
    };
     console.log(index)
     return fid(index -1) + fid(index - 2)
}

sub.on('message', (channel, message) => {
    redisClient.hset('values', message, fid(parseInt(message)))
})

sub.subscribe('insert')