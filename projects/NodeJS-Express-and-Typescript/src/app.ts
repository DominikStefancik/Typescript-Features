import express, { Request, Response, NextFunction } from "express";
import { json } from "body-parser";
import todoRoutes from "./routes/todo.router";

const PORT = 3000;
const app = express();

// This middleware parses body of all incoming requests and extracts any JSON data it finds
// in there to then populate the requests body
app.use(json());

// Forward all request which start with "/todo" to "todoRouter"
app.use("/todo", todoRoutes);

// Register an error handling middleware function
// (which will be automatically triggered by Express when an error on any routes occur) 
app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
  response.status(500)
          .json({
            message: error.message
          });
})

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));