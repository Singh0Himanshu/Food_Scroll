const ImageKit = require('@imagekit/nodejs')
const { toFile } = ImageKit;

const imagekit = new ImageKit({
  urlEndpoint: process.env.IMAGEKIT_URL,       
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY, 
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,

});

async function uploadFile(fileBuffer, fileName) {
  try {
    const result = await imagekit.files.upload({
      file: await toFile(fileBuffer, fileName), 
      fileName: fileName,  
      });                     
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
}


module.exports = {uploadFile}