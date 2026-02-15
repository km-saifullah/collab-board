import Board from "../models/board.model.js";

export const createBoard = async (req, res) => {
  try {
    const board = await Board.create({
      name: req.body.name,
      owner: req.user.id,
      tasks: [],
    });

    res.status(201).json(board);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getBoards = async (req, res) => {
  try {
    const boards = await Board.find({ owner: req.user.id });
    res.json(boards);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateTasks = async (req, res) => {
  try {
    const { boardId } = req.params;
    const { tasks } = req.body;

    const board = await Board.findByIdAndUpdate(
      boardId,
      { tasks },
      { returnDocument: "after" },
    );

    res.json(board);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
