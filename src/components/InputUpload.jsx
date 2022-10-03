import '../css/InputUpload.css';
import image from '../utils/image.svg';
import imageUpload from '../api/Api';
import { UsePreload } from '../hooks/UsePreload';

const InputUpload = ({ url }) => {

  const { preload, setPreload } = UsePreload();

  //funcion para subir la imagen
  const handleChange = (e) => {

    //Obteniendo el file
    const file = e.target.files[0];

    //activando la carga de la app
    setPreload({
      ...preload,
      vista1: false
    });

    //funcion para enviar la imagen
    const urlImage = async (file) => {
      try {
        //Validando que haya un archivo
        if (file) {
          //consiguiendo la respuesta de la api
          const data = await imageUpload(file);

          //Validando que no haya error
          if (data.error === '') {
            //quitanto la carga de la app
            setPreload({
              ...preload,
              vista1: true,
              vista2: false,
              urlpreview: URL.createObjectURL(file),
              urlOrigin: data.response.webViewLink,
            });

          } else {
            //Suponiendo que hay un error
            //quitando la carga de la app
            setPreload({
              ...preload,
              vista1: true,
            });
            
            //alerta de error en caso de que haya
            alert(data.response || 'lo siento hubo un error');
          }
        } else {
          //alerta de error en caso de que haya
          alert('No enviaste un archivo');
        }
      } catch (error) {
        console.log(error)
      }
    }

    //activando l funcion
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