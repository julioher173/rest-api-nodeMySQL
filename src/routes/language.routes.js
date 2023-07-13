import { Router } from "express";
import { methods as languageController } from "./../controllers/language.controller";
const router = Router();

router.get("/",languageController.getLenguages)

router.post("/",languageController.addLenguage)

router.get("/:id",languageController.getLenguagesBID)

router.delete("/:id",languageController.deleteLenguages)

router.put("/:id",languageController.updateLenguages)

export default router;