let users = [{ id: 1, userName: 'John', email: 'test@test.com' }]

// Get all users
exports.getUser = (req, res) => {
  res.status(200).json({
    result: users.length,
    msg: 'Fetched Data Success',
    status: 'success',
    data: users
  })
}

exports.getById = (req, res) => {
  res.status(200).json({
    msg: 'detta är user by Id',
    status: 'success'
  })
}

// Create user
exports.postUser = (req, res) => {
  let userName = req.body.userName
  let email = req.body.email

  if (userName && email) {
    users.push({
      id: (users.length + 1).toString(),
      userName,
      email
    })

    res.status(200).json({
      msg: 'User created',
      status: 'success',
      data: users
    })
  } else {
    res.status(400).json({
      msg: 'User  Name or Email required',
      status: 'Failed'
    })
  }
}

exports.updateUser = (req, res) => {
  let id = req.params.id
  let userName = req.body.userName
  let email = req.body.email

  if (userName && email) {
    let index = users.findIndex((upd) => upd.id == id)

    users[index] = {
      ...users[index],
      userName,
      email
    }

    res.status(200).json({
      msg: 'User updated',
      status: 'success',
      data: users
    })
  } else {
    res.status(400).json({
      msg: 'Validation error',
      status: 'Failed'
    })
  }
}

// Renove a user
exports.removeUser = (req, res) => {
  let id = req.params.id
  let newUser = users.filter((rem) => rem.id != id)

  users = newUser

  res.status(200).json({
    msg: 'User Deleted',
    status: 'success',
    data: users
  })
}
