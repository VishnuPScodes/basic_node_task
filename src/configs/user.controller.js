export const getAllUser = async (req, res) => {
  const user = await User.find();
};
