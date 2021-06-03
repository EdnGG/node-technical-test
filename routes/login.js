const express = require('express');
const router = express.Router();
const getCommits = require('../helpers/getUserCommits')

// function getUserCommits() {
//   const url = 'https://api.github.com/users/EdnGG/repos'
// }

router.get('/', async (req, res) => {

  // const body = {
  //   nombre: req.body,
  //   email: req.body,
  //   role: req.body,
  // }
  try {

/************************** */
  // const commitUserGithub = ''
  //   res.json(commitUserGithub)

    res.send('Hello world')


  } catch (error) {
    return res.status(500).json({
      mensaje: 'Something was wrong',
      error
    })
  }
})

// router.get('/', (req, res)=> {
//   res.send('Main page')
// })

router.get('/', getCommits.getUserCommits)


module.exports = router;