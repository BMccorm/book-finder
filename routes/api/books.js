const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

module.exports = router;
