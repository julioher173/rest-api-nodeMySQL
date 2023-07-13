import app from "./app"
//se configura el servidor
const main=() => {
    app.listen(app.get("port"));
    console.log(`server on port ${app.get("port")}`);
}


main();