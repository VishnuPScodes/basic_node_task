import { User } from '../models/user.model.js';

export const getAllUser = async (req, res) => {
  try {
    const user = await User.find();
    if (!user) {
      res.status(400).send('Users not found!');
    }
    return res.status(200).send({ data: user });
  } catch (error) {
    res.status(500).send({
      message: error,
      status: 'Something went wrong',
    });
  }
};

export const getOneUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findOne({ _id: userId });
    if (!user) {
      res.status(400).send('User not found!');
    }
    return res.status(200).send({ data: user });
  } catch (error) {
    res.status(500).send({
      message: error,
      status: 'Something went wrong',
    });
  }
};

export const createUser = async (req, res) => {
  try {
    const { email, name, age } = req.body;
    const user = await User.create({ email, name, age });
    if (!user) {
      res.status(400).send('User not created!');
    }
    return res.status(200).send({ data: user });
  } catch (error) {
    res.status(500).send({
      message: error,
      status: 'Something went wrong',
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { email, name, age } = req.body;
    const { userId } = req.params;
    const user = await User.findOneAndUpdate(
      { _id: userId },
      { email, name, age },
      { new: true }
    );
    if (!user) {
      res.status(400).send('User not updated!');
    }
    return res.status(200).send({ data: user });
  } catch (error) {
    res.status(500).send({
      message: error,
      status: 'Something went wrong',
    });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findOneAndDelete({ _id: userId });
    if (!user) {
      res.status(400).send('User not deleted!');
    }
    return res.status(200).send({ data: user });
  } catch (error) {
    res.status(500).send({
      message: error,
      status: 'Something went wrong',
    });
  }
};
