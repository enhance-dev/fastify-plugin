export async function get (req) {
  console.log(req)
  return {
    json: ['one', 2, true]
  }
}
