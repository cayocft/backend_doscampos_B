const logicaDB = require('./logicaDB');

const crearRegistroForm = async (req,res)=>{
    let registroForm = req.body;
     
    try {
        let respuesta = await logicaDB.crearRegistroFormDB(registroForm);
        res.status(200).json({
            'registro': respuesta
        });
    } catch (error) {
        res.status(500).json({
            error
        });
    }
}

const obtenerRegistroForm = async (req,res) => {
    try {
        let respuesta = await logicaDB.obtenerRegistroFormDB();
        res.status(200).json({
            'registro': respuesta
        });
    } catch (error) {
        res.status(500).json({
            error
        });
    }
}

module.exports = {
    crearRegistroForm,
    obtenerRegistroForm
}