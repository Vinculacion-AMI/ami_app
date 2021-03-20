const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//example
const TaskSchema =  Schema({
  title: String,
  description: String,
  status: {
    type: Boolean,
    default: false,
  },
});
const persons =  Schema(
  {
    nombre: String,
    apellido: String,
    correo: String,
    imagen: String,
    contrasena: String,
  },
  {
    timestamps: true,
  }
);
const score =  Schema(
  {
    person: {
      type: mongoose.Schema.ObjectId,
      ref: 'persons',
    },
    nivel: String,
    Ptotal: String,
  },
  {
    timestamps: true,
  }
);
const contentLevel =  Schema(
  {
    titulo: String,
    imagen: String,
    nivel: String,
  },
  {
    timestamps: true,
  }
);
const Persons = mongoose.model("Persons", persons),
  Score = mongoose.model("Score", score),
  ContentLevel = mongoose.model("ContentLevel", contentLevel);
module.exports = {
  Persons,
  Score,
  ContentLevel,
};
