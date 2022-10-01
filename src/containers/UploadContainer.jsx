import '../css/UploadContainer.css';

const UploadContainer = ({ children }) => {
  return (
    <section className='uploadContainer'>
      {children}
    </section>
  )
};

export default UploadContainer;