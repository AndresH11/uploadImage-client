import { deleteImage } from "../api/Api";

const InputDelete = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = e.target[0].value;
    const deleteimage = async (id) => {
      const response = await deleteImage(id);
      console.log(response);
    }
    deleteimage(id);
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'none' }} >
      <input type='text' />
      <button type="submit">borrar</button>
    </form>
  );
};

export default InputDelete;