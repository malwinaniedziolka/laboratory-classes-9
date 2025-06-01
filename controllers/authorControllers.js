const Author = require('../models/Author');

exports.getAllAuthors = async (req, res) => {
  const authors = await Author.find();
  res.status(200).json(authors);
};

exports.updateAuthor = async (req, res) => {
  try {
    const updated = await Author.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.sendStatus(404);
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};