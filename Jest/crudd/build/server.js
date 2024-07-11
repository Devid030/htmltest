"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp(target, key, result);
  return result;
};
var __decorateParam = (index, decorator) => (target, key) => decorator(target, key, index);

// src/app.ts
var import_express = __toESM(require("express"));
var import_swagger_ui_express = __toESM(require("swagger-ui-express"));
var import_fs = __toESM(require("fs"));
var import_path = __toESM(require("path"));

// src/routes/v1/routes.ts
var import_runtime3 = require("@tsoa/runtime");

// src/controllers/user.controller.ts
var import_tsoa = require("tsoa");

// src/database/models/user.model.ts
var import_mongoose = require("mongoose");
var userSchema = new import_mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true }
});
var User = (0, import_mongoose.model)("User", userSchema);
var user_model_default = User;

// src/database/repositories/user.repositories.ts
var UserRepository = class {
  // find all user
  async getAllUsers() {
    return user_model_default.find();
  }
  // create user POST 
  async createUser(data) {
    try {
      const newUser = new user_model_default(data);
      return newUser.save();
    } catch (error) {
      console.error(`Error create user: `, error);
      throw new Error("Failed to create user");
    }
  }
};

// src/services/users.service.ts
var UserService = class {
  constructor() {
    this.userRepository = new UserRepository();
  }
  async getAllUsers() {
    try {
      return await this.userRepository.getAllUsers();
    } catch (error) {
      console.log("Can not fetch all user", error);
      throw new Error("Failed to fetch all user");
    }
  }
  async createUser(params) {
    try {
      return await this.userRepository.createUser(params);
    } catch (error) {
      console.log("Error create user:", error);
      throw new Error("Failed to create user");
    }
  }
};

// src/controllers/user.controller.ts
var UserController = class extends import_tsoa.Controller {
  constructor() {
    super(...arguments);
    this.userService = new UserService();
  }
  async getAllUsers() {
    try {
      return await this.userService.getAllUsers();
    } catch (error) {
      console.log("Cannot get user");
      return void 0;
    }
  }
  async createNewUser(requestBody) {
    try {
      return await this.userService.createUser(requestBody);
    } catch (error) {
      console.log("Failed to create user: ", error);
      throw new Error("Failed to create user");
    }
  }
};
__decorateClass([
  (0, import_tsoa.Get)("/")
], UserController.prototype, "getAllUsers", 1);
__decorateClass([
  (0, import_tsoa.Post)("/"),
  __decorateParam(0, (0, import_tsoa.Body)())
], UserController.prototype, "createNewUser", 1);
UserController = __decorateClass([
  (0, import_tsoa.Route)("/v1/users")
], UserController);

// src/controllers/products.controller.ts
var import_tsoa2 = require("tsoa");

// src/database/models/products.model.ts
var import_mongoose2 = require("mongoose");
var productSchema = new import_mongoose2.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true }
});
var Product = (0, import_mongoose2.model)("Product", productSchema);

// src/database/repositories/products.repositories.ts
var ProductRepository = class {
  // get all 
  async getAllProducts(sort, filter, category, price) {
    try {
      const query = {};
      if (filter) {
        query.name = { $regex: filter, $options: "i" };
      }
      if (category) {
        query.category = { $regex: category, $options: "i" };
      }
      if (price !== void 0) {
        query.price = price;
      }
      return await Product.find(query).sort(sort);
    } catch (error) {
      console.log("Cannot get products", error);
      throw error;
    }
  }
  // create 
  async createProduct(data) {
    try {
      const newProduct = new Product(data);
      return await newProduct.save();
    } catch (error) {
      console.log("Cannot create product", error);
      throw error;
    }
  }
  // findbyId
  async getproductById(id) {
    try {
      return await Product.findById(id);
    } catch (error) {
      throw error;
    }
  }
  // update 
  async updateProduct(id, data) {
    try {
      return await Product.findByIdAndUpdate(id, data, { new: true });
    } catch (error) {
      throw error;
    }
  }
  // delete
  async deleteProduct(id) {
    try {
      return await Product.findByIdAndDelete(id);
    } catch (error) {
      throw error;
    }
  }
};
var productRepository = new ProductRepository();

// src/services/products.service.ts
var ProductService = class {
  // get all 
  async getAllProducts(sort, filter, category, price) {
    try {
      const products = await productRepository.getAllProducts(sort, filter, category, price);
      return products;
    } catch (error) {
      throw error;
    }
  }
  // create
  async createProduct(data) {
    try {
      const newProduct = await productRepository.createProduct(data);
      return newProduct;
    } catch (error) {
      throw error;
    }
  }
  // findbyId
  async getProductById(id) {
    try {
      const products = await productRepository.getproductById(id);
      return products;
    } catch (error) {
      throw error;
    }
  }
  // update
  async updateProduct(id, params) {
    try {
      return await productRepository.updateProduct(id, params);
    } catch (error) {
      throw error;
    }
  }
  // delete 
  async deleteProduct(id) {
    try {
      return await productRepository.deleteProduct(id);
    } catch (error) {
      throw error;
    }
  }
};
var products_service_default = new ProductService();

// src/controllers/products.controller.ts
var ProductController = class extends import_tsoa2.Controller {
  async getAllProducts(sort, filter, category, price) {
    console.log("Query parameter - filter:", "sort:", sort, "filter:", filter, "category:", category);
    try {
      const products = await products_service_default.getAllProducts(sort, filter, category, price);
      return products;
    } catch (error) {
      throw error;
    }
  }
  async createProduct(requestBody) {
    try {
      const newProduct = await products_service_default.createProduct(requestBody);
      return newProduct;
    } catch (error) {
      console.error("Error creating product:", error);
      throw new Error("Product creation failed");
    }
  }
  async getProductById(id) {
    try {
      const products = await products_service_default.getProductById(id);
      return products;
    } catch (error) {
      throw error;
    }
  }
  async updateProduct(id, requestBody) {
    try {
      const updateProduct = await products_service_default.updateProduct(id, requestBody);
      return updateProduct;
    } catch (error) {
      throw error;
    }
  }
  async deleteProduct(id) {
    try {
      const deleteProduct = await products_service_default.deleteProduct(id);
      return deleteProduct;
    } catch (error) {
      throw error;
    }
  }
};
__decorateClass([
  (0, import_tsoa2.Get)("/"),
  __decorateParam(0, (0, import_tsoa2.Query)()),
  __decorateParam(1, (0, import_tsoa2.Query)()),
  __decorateParam(2, (0, import_tsoa2.Query)()),
  __decorateParam(3, (0, import_tsoa2.Query)())
], ProductController.prototype, "getAllProducts", 1);
__decorateClass([
  (0, import_tsoa2.Post)("/"),
  __decorateParam(0, (0, import_tsoa2.Body)())
], ProductController.prototype, "createProduct", 1);
__decorateClass([
  (0, import_tsoa2.Get)("{id}"),
  __decorateParam(0, (0, import_tsoa2.Path)())
], ProductController.prototype, "getProductById", 1);
__decorateClass([
  (0, import_tsoa2.Put)("{id}"),
  __decorateParam(0, (0, import_tsoa2.Path)()),
  __decorateParam(1, (0, import_tsoa2.Body)())
], ProductController.prototype, "updateProduct", 1);
__decorateClass([
  (0, import_tsoa2.Delete)("{id}"),
  __decorateParam(0, (0, import_tsoa2.Path)())
], ProductController.prototype, "deleteProduct", 1);
ProductController = __decorateClass([
  (0, import_tsoa2.Route)("/v1/products")
], ProductController);

// src/routes/v1/routes.ts
var models = {
  "IUser": {
    "dataType": "refObject",
    "properties": {
      "name": { "dataType": "string", "required": true },
      "email": { "dataType": "string", "required": true }
    },
    "additionalProperties": false
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "UserCreationParams": {
    "dataType": "refObject",
    "properties": {
      "name": { "dataType": "string", "required": true },
      "email": { "dataType": "string", "required": true }
    },
    "additionalProperties": false
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "IProduct": {
    "dataType": "refObject",
    "properties": {
      "name": { "dataType": "string", "required": true },
      "category": { "dataType": "string", "required": true },
      "price": { "dataType": "double", "required": true }
    },
    "additionalProperties": false
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  "Partial_IProduct_": {
    "dataType": "refAlias",
    "type": { "dataType": "nestedObjectLiteral", "nestedProperties": { "name": { "dataType": "string" }, "category": { "dataType": "string" }, "price": { "dataType": "double" } }, "validators": {} }
  }
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
var templateService = new import_runtime3.ExpressTemplateService(models, { "noImplicitAdditionalProperties": "throw-on-extras", "bodyCoercion": true });
function RegisterRoutes(app2) {
  app2.get(
    "/v1/users",
    ...(0, import_runtime3.fetchMiddlewares)(UserController),
    ...(0, import_runtime3.fetchMiddlewares)(UserController.prototype.getAllUsers),
    async function UserController_getAllUsers(request, response, next) {
      const args = {};
      let validatedArgs = [];
      try {
        validatedArgs = templateService.getValidatedArgs({ args, request, response });
        const controller = new UserController();
        await templateService.apiHandler({
          methodName: "getAllUsers",
          controller,
          response,
          next,
          validatedArgs,
          successStatus: void 0
        });
      } catch (err) {
        return next(err);
      }
    }
  );
  app2.post(
    "/v1/users",
    ...(0, import_runtime3.fetchMiddlewares)(UserController),
    ...(0, import_runtime3.fetchMiddlewares)(UserController.prototype.createNewUser),
    async function UserController_createNewUser(request, response, next) {
      const args = {
        requestBody: { "in": "body", "name": "requestBody", "required": true, "ref": "UserCreationParams" }
      };
      let validatedArgs = [];
      try {
        validatedArgs = templateService.getValidatedArgs({ args, request, response });
        const controller = new UserController();
        await templateService.apiHandler({
          methodName: "createNewUser",
          controller,
          response,
          next,
          validatedArgs,
          successStatus: void 0
        });
      } catch (err) {
        return next(err);
      }
    }
  );
  app2.get(
    "/v1/products",
    ...(0, import_runtime3.fetchMiddlewares)(ProductController),
    ...(0, import_runtime3.fetchMiddlewares)(ProductController.prototype.getAllProducts),
    async function ProductController_getAllProducts(request, response, next) {
      const args = {
        sort: { "in": "query", "name": "sort", "dataType": "string" },
        filter: { "in": "query", "name": "filter", "dataType": "string" },
        category: { "in": "query", "name": "category", "dataType": "string" },
        price: { "in": "query", "name": "price", "dataType": "double" }
      };
      let validatedArgs = [];
      try {
        validatedArgs = templateService.getValidatedArgs({ args, request, response });
        const controller = new ProductController();
        await templateService.apiHandler({
          methodName: "getAllProducts",
          controller,
          response,
          next,
          validatedArgs,
          successStatus: void 0
        });
      } catch (err) {
        return next(err);
      }
    }
  );
  app2.post(
    "/v1/products",
    ...(0, import_runtime3.fetchMiddlewares)(ProductController),
    ...(0, import_runtime3.fetchMiddlewares)(ProductController.prototype.createProduct),
    async function ProductController_createProduct(request, response, next) {
      const args = {
        requestBody: { "in": "body", "name": "requestBody", "required": true, "ref": "IProduct" }
      };
      let validatedArgs = [];
      try {
        validatedArgs = templateService.getValidatedArgs({ args, request, response });
        const controller = new ProductController();
        await templateService.apiHandler({
          methodName: "createProduct",
          controller,
          response,
          next,
          validatedArgs,
          successStatus: void 0
        });
      } catch (err) {
        return next(err);
      }
    }
  );
  app2.get(
    "/v1/products/:id",
    ...(0, import_runtime3.fetchMiddlewares)(ProductController),
    ...(0, import_runtime3.fetchMiddlewares)(ProductController.prototype.getProductById),
    async function ProductController_getProductById(request, response, next) {
      const args = {
        id: { "in": "path", "name": "id", "required": true, "dataType": "string" }
      };
      let validatedArgs = [];
      try {
        validatedArgs = templateService.getValidatedArgs({ args, request, response });
        const controller = new ProductController();
        await templateService.apiHandler({
          methodName: "getProductById",
          controller,
          response,
          next,
          validatedArgs,
          successStatus: void 0
        });
      } catch (err) {
        return next(err);
      }
    }
  );
  app2.put(
    "/v1/products/:id",
    ...(0, import_runtime3.fetchMiddlewares)(ProductController),
    ...(0, import_runtime3.fetchMiddlewares)(ProductController.prototype.updateProduct),
    async function ProductController_updateProduct(request, response, next) {
      const args = {
        id: { "in": "path", "name": "id", "required": true, "dataType": "string" },
        requestBody: { "in": "body", "name": "requestBody", "required": true, "ref": "Partial_IProduct_" }
      };
      let validatedArgs = [];
      try {
        validatedArgs = templateService.getValidatedArgs({ args, request, response });
        const controller = new ProductController();
        await templateService.apiHandler({
          methodName: "updateProduct",
          controller,
          response,
          next,
          validatedArgs,
          successStatus: void 0
        });
      } catch (err) {
        return next(err);
      }
    }
  );
  app2.delete(
    "/v1/products/:id",
    ...(0, import_runtime3.fetchMiddlewares)(ProductController),
    ...(0, import_runtime3.fetchMiddlewares)(ProductController.prototype.deleteProduct),
    async function ProductController_deleteProduct(request, response, next) {
      const args = {
        id: { "in": "path", "name": "id", "required": true, "dataType": "string" }
      };
      let validatedArgs = [];
      try {
        validatedArgs = templateService.getValidatedArgs({ args, request, response });
        const controller = new ProductController();
        await templateService.apiHandler({
          methodName: "deleteProduct",
          controller,
          response,
          next,
          validatedArgs,
          successStatus: void 0
        });
      } catch (err) {
        return next(err);
      }
    }
  );
}

// src/middlewares/error.ts
var import_tsoa3 = require("tsoa");
function errorHandler(err, req, res, next) {
  if (err instanceof import_tsoa3.ValidateError) {
    console.warn(`Caught Validateion Error for ${req.path}: `, err.fields);
    res.status(422).json({
      message: "Validate Failed",
      details: err?.fields
    });
  } else if (err instanceof Error) {
    console.error(`Error: $(err.message)`);
    res.status(500).json({
      message: err.message
    });
  } else {
    next(err);
  }
}
var error_default = errorHandler;

// src/app.ts
var swaggerDocument = JSON.parse(import_fs.default.readFileSync(import_path.default.join(__dirname, "docs/swagger.json"), "utf8"));
var app = (0, import_express.default)();
app.use(import_express.default.json());
RegisterRoutes(app);
app.use("/api-docs", import_swagger_ui_express.default.serve, import_swagger_ui_express.default.setup(swaggerDocument));
app.use(error_default);
var app_default = app;

// src/config.ts
var import_dotenv = __toESM(require("dotenv"));
var import_path2 = __toESM(require("path"));
var yup = __toESM(require("yup"));
function loadConfig() {
  const env = "production";
  const envPath = import_path2.default.resolve(__dirname, `./configs/.env.${env}`);
  import_dotenv.default.config({ path: envPath });
  const envVarsSchema = yup.object().shape({
    NODE_ENV: yup.string().oneOf(["development", "production", "test"]).default("development"),
    PORT: yup.number().default(3e3),
    MONGODB_URL: yup.string().required()
  }).required();
  let envVars;
  try {
    envVars = envVarsSchema.validateSync(process.env, { stripUnknown: true });
  } catch (error) {
    throw new Error(`Config validation error: ${error}`);
  }
  return {
    env: envVars.NODE_ENV,
    port: envVars.PORT,
    mongodbUrl: envVars.MONGODB_URL
  };
}
var configs = loadConfig();
var config_default = configs;

// src/database/connection.ts
var import_mongoose3 = __toESM(require("mongoose"));
async function connectMongoDB() {
  try {
    await import_mongoose3.default.connect(
      config_default.mongodbUrl
    );
    console.log("Connect to MongoDB successfully!");
  } catch (error) {
    console.log("Error Conecction to MongoDB", error.messsage);
  }
}

// src/server.ts
async function run() {
  await connectMongoDB();
  app_default.listen(config_default.port, () => {
    console.log(`User Service running on Port: ${config_default.port}`);
  });
}
run();
