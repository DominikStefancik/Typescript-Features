import express, { Request, Response, NextFunction } from "express";
import todoRoutes from "./routes/todos";

const PORT = 3000;
const app = express();

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