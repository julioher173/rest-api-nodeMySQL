import express from "express";
import morgan from "morgan";
//importar rutas
import languageRoutes from "./routes/language.routes"


const app = express();

//setting 
app.set("port", 3000)

//middleware intermediarios en las peticiones
app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use("/api/languages",languageRoutes)

export default app;