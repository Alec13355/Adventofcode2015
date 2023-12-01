const crypto = require('crypto');

const secretKey = 'yzbqklnj';
currentHash = '';
hashIteration = 0;
while(!currentHash.startsWith('000000')){
    hashIteration++;
    currentHash = crypto.createHash('md5').update(secretKey + hashIteration).digest('hex');
    //console.log(currentHash);
}
console.log(hashIteration);
