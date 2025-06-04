const Joi = require("@hapi/joi");
const {
  createItem,
  listItem,
  deleteItem,
  getItem,
  updateItem,
} = require("../controllers/itemController");
const { verifyToken, requireRole } = require("../middleware/auth");

module.exports = [
  {
    method: "POST",
    path: "/item",
    options: {
      pre: [verifyToken, requireRole("admin")],
      payload: {
        output: "stream",
        parse: true,
        allow: "multipart/form-data",
        multipart: true,
        maxBytes: 10 * 1024 * 1024, // 10MB
      },
      handler: createItem,
      description: "Create artikel (admin)",
      tags: ["api", "artikel"],
    },
  },
  {
    method: "GET",
    path: "/item",
    options: {
      handler: listItem,
      description: "List artikel",
      tags: ["api", "artikel"],
    },
  },
  {
    method: "GET",
    path: "/item/{id}",
    options: {
      handler: getItem,
      description: "Detail artikel",
      tags: ["api", "artikel"],
    },
  },

  {
    method: 'PUT',
    path: '/item/{id}',
    options: {
      pre: [verifyToken, requireRole('admin')],
        payload: {
          output: 'stream',
        parse: true,
        allow: 'multipart/form-data',
        multipart: true,
        maxBytes: 10 * 1024 * 1024, // 10MB
        },
      handler: updateItem,
      description: 'Create artikel (admin)',
      tags: ['api', 'artikel']
    }
  },

  {
    method: "DELETE",
    path: "/item/{id}",
    options: {
      pre: [verifyToken, requireRole("admin")],
      handler: deleteItem,
      description: "Delete artikel (admin)",
      tags: ["api", "artikel"],
    },
  },
];
