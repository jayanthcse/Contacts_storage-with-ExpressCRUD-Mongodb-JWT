const express = require("express");
const {
  getContact,
  getContacts,
  updateContact,
  createContact,
  deleteContact
} = require("../controllers/contactController");

const validateToken = require("../middleware/validateTokenHandler"); // 👈 Import middleware

const router = express.Router();

router.use(validateToken); // 👈 Apply JWT auth to all routes

router.route("/").get(getContacts);

router.route("/").post(createContact);

router.route("/:id").get(getContact);

router.route("/:id").put(updateContact);

router.route("/:id").delete(deleteContact);

module.exports = router;
