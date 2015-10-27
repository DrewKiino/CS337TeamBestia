



export function test(req, res) {
  sails.log.debug(req.body)
  res.json({
    Server: "Hi!"
  })
}