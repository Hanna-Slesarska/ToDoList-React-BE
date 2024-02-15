const TaskModel = require('./TaskModel');

//Get
module.exports.getTask = async (req, res) => {
    const myTask = await TaskModel.find();
    res.send(myTask);
}

module.exports.saveTask = async (req, res) => {
    const { title } = req.body;
    TaskModel.create({ title })
    .then((data) => { console.log('Task added')
    res.send(data)
    })
    
}

module.exports.deleteTask = async (req, res) => {
    const { _id } = req.body;
    TaskModel.findByIdAndDelete(_id)
    .then(() => res.send('Delete a task'))
}

module.exports.editTask = async (req, res) => {
    const { _id, title } = req.body;
    TaskModel.findByIdAndUpdate(_id, {title})
    .then(() => res.send('Edited a task'))
}