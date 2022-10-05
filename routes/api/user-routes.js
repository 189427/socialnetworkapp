const router = require("express").Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
  addFriendstoList,
  removeFriend,
} = require("../../controllers/user-controller");

router.route("/").get(getAllUsers).post(createUser);

router
  .route("/:id")
  .get(getUserById)
  .put(updateUserById)
  .delete(deleteUserById);

router
  .route("/:userId/friends/:friendId")
  .post(addFriendstoList)
  .delete(removeFriend);

module.exports = router;
