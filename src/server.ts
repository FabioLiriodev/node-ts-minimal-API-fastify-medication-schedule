import fastify from "fastify";
import cors from "@fastify/cors";

import { medications } from "./repository/medication-repository";
import { classlist } from "./repository/class-repository";
import { StatusCode } from "./utils/status-code";
import { MedicationModel } from "./models/medication-model";


const server = fastify({logger: true});
const defaultContent = "application/json";

server.register(cors, {
    origin: "*"
});

//LISTA DE MEDICAMENTOS //

server.get("/api/medications", async(request, response) => {
    response.type(defaultContent).code(StatusCode.OK);

    return { medications }
})

//LISTA DE CLASSES DE MEDICAMENTOS //

server.get("/api/medications/classes", async(request, response) => {
    response.type(defaultContent).code(StatusCode.OK);

    return { classlist }
})

// FILTER DE MEDICAMENTOS PELO ID //

server.get<{ Params:MedicationModel }>("/api/medications/:id", async(request, response)=> {
    const id = parseInt(request.params.id);
    const medication = medications.find( m => m.id === id);

    if(!medication) {
        response.type(defaultContent).code(StatusCode.NOT_FOUND);
        return { message: "Medication Not Found!" }
    } else {
        response.type(defaultContent).code(StatusCode.OK);
        return { medication };
    }
})

// FILTER DE MEDICAMENTOS PELO SCHEDULE //

server.get<{ Params: MedicationModel }>("/api/medication/:schedule", async(request, response) => {
    const schedule = request.params.schedule;
    const medication = medications.filter( m => m.schedule === schedule)

    if(medication.length === 0) {
         response.type(defaultContent).code(StatusCode.NOT_FOUND);
        return { message: "Medication Not Found!" }
    } else {
        response.type(defaultContent).code(StatusCode.OK);
        return { medication };
    }
})

// FILTER DE MEDICAMENTOS PELA CLASSE //

server.get<{ Params: MedicationModel }>("/api/medication/class/:class", async(request, response) => {
    const classParam = request.params.class;
    const classes = classlist.filter(c => c.class.toLowerCase() === classParam.toLowerCase());

    if(classes.length === 0) {
        response.type(defaultContent).code(StatusCode.NOT_FOUND);
        return { message: "Class Not Found!" }
    } else {
        return { classes }
    }
})





server.listen({port: 3333}, () => {
    console.log("Server Init!")
})