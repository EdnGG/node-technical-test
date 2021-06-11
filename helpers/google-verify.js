// const { OAuth2Client } = require('google-auth-library');

const { OAuth2Client } = require('google-auth-library')
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)

const verify = async (idToken = '') => {
  
  const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,  
  });

  const { name: name, 
          picture: image, 
          email: email
        } = ticket.getPayload();


  // const payload = ticket.getPayload();
  // console.log(payload.name)
  // console.log(payload.email)
  // console.log(payload.picture)

  return { name, image, email }

  // return {
  //   name: payload.name,
  //   email: payload.email,
  //   imgUrl: payload.picture,
  //   // google: true
  // }
}

module.exports = { verify }