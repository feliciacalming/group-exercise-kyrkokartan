const User = require("../models/User");

exports.getAllUsers = (req, res, next) => {
  /* try {
        if (!Users) return respond.sendStatus(404) (Not found)
         // to exclude password from GET request response: "select: false" in UserSchema 
    
    } catch (error) {
    return res.status(500)
    }*/
  return res.send("Get all users!");
};

exports.getUserById = (req, res, next) => {
  /*try {
    if (!id) return response.sendStatus(404) (Not found)
    // to exclude password from GET request response: "select: false" in UserSchema 


    } catch(error) {

   return response.sendStatus(500) 
    } */

  return res.send("Get user by ID!");
};

exports.addnewUser = (req, res, next) => {
  /*try {

        if (!username || !password) return respond.sendstatus(400) (Bad Request) 
        
        return response.setHeader(‘Location’, ‘/api/v1/users/’)
        .status(201).json(newUser) 
    }
    catch(error) {
        
        return response.sendStatus(500) 
    }*/

  //if success: return status: 201

  return res.send("Add new user!");
};

exports.updateUser = (req, res, next) => {
  /* try { 
        if (!id) return response.sendStatus(404) (Not Found)
        if (!admin/user?) return response.sendStatus(403) (Forbidden) eller 401 Unauthorized?
        if (!username || !password || !email) return response.sendStatus(400) (Bad Request) 

  } catch (error) {
    return response.sendStatus(500) 
  }
*/
  return res.send("Update user!");
};

exports.deleteUser = (req, res, next) => {
  /* try { if (!admin/user?) response.sendStatus(403)

} catch (error) {
    return response.sendStatus(500) 
}
  if success: return status: 204 */
  return res.send("Delete user!");
};
