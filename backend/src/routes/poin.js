const Joi = require("@hapi/joi");
const {
  createPenukaran,
  listUserPenukaran,
  listAllPenukaran,
  approvePenukaran,
} = require("../controllers/poinController");
const { verifyToken, requireRole } = require("../middleware/auth");

module.exports = [
  {
    method: "POST",
    path: "/poin/tukar",
    options: {
      pre: [verifyToken],
      payload: {
        parse: true,
        allow: "application/json",
      },
      handler: createPenukaran,
      description: "Create tukar",
      tags: ["api", "poin"],
    },
  },

  {
    method: "GET",
    path: "/poin/user",
    options: {
      pre: [verifyToken],
      handler: listUserPenukaran,
      description: "List penukaran poin user",
      tags: ["api", "poin"],
    },
  },
  {
    method: "GET",
    path: "/poin",
    options: {
      pre: [verifyToken, requireRole("admin")],
      handler: listAllPenukaran,
      description: "List semua penukaran poin (admin)",
      tags: ["api", "poin"],
    },
  },
  {
    method: "PUT",
    path: "/poin/{id}/approve",
    options: {
      pre: [verifyToken, requireRole("admin")],
      handler: approvePenukaran,
      validate: {
        payload: Joi.object({
          status: Joi.string()
            .valid("Menunggu", "Diterima", "Dibatalkan")
            .required(),
        }),
      },
      description: "Approve penukaran poin (admin)",
      tags: ["api", "poin"],
    },
  },
];
