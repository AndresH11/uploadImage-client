import '../css/Title.css';

const Title = ({ state }) => {

  return (
    <div className='titleContainer'>
      {state ?
        <>
          <h1>Upload your image</h1>
          <p>File should be Jpeg, Png,...</p>
        </>
        :
        <>
          <span className="material-symbols-outlined">check_circle</span>
          <h1 style={{ 'marginTop': '0' }}>Uploaded Successfully!</h1>
        </>
      }
    </div>
  );
};

export default Title;