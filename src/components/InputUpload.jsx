import '../css/InputUpload.css';
import image from '../utils/image.svg';
import imageUpload from '../api/Api';
import { UsePreload } from '../hooks/UsePreload';

const InputUpload = ({ url }) => {

  const { preload, setPreload } = UsePreload();
  //funcion para subir la imagen
  const handleChange = (e) => {

    const file = e.target.files[0];

    setPreload({
      ...preload,
      vista1: false
    });

    const urlImage = async (file) => {
      try {
        //Validando que haya un archivo
        if (file) {
          const data = await imageUpload(file);

          //Validando que no haya error
          if (data.error === '') {
            setPreload({
              ...preload,
              vista1: true,
              vista2: false,
              urlpreview: URL.createObjectURL(file),
              urlOrigin: data.response.url,
            });
          } else {
            //Suponiendo que hay un error
            setPreload({
              ...preload,
              vista1: true,
            });
            alert('lo siento hubo un error');
          }
        } else {
          alert('No enviaste un archivo');
        }
      } catch (error) {
        console.log(error)
      }
    }
    urlImage(file);
  };

  return (
    <div className='inputUpload'>
      {
        preload.vista2 ?
          <>
            <label htmlFor='imagen'>
              <figure>
                <img src={image} alt='imagen' />
              </figure>
              <p>Drag & Drop your image here</p>
            </label>
            <input type='file' id='imagen' name='imagen' accept='image/png, image/jpg, image/jpeg, image/gif' style={{ 'display': 'none' }} onChange={handleChange} />
          </>
          :
          <div className='viewContainerImage'>
            <figure>
              <img src={url} alt="preview" />
            </figure>
          </div>
      }
    </div>
  );
};

export default InputUpload;