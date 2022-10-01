import './App.css';
import UploadContainer from './containers/UploadContainer';
import Title from './components/Title';
import InputUpload from './components/InputUpload';
import Button from './components/Button';
import Preloader from './components/Preloader';
import LinkUrlImage from './components/LinkUrlImage';
import InputDelete from './components/InputDelete';
import { UsePreload } from './hooks/UsePreload';
import Footer from './components/Footer';

function App() {
  const { preload } = UsePreload();
  return (
    <div className="App">
      {
        preload.vista1 ?
          <>
            <UploadContainer>
              <Title state={preload.vista2} />
              <InputUpload url={preload.urlpreview} />
              {
                preload.vista2 ?
                  <>
                    <Button />
                  </>
                  :
                  <>
                    <LinkUrlImage url={preload.urlOrigin} />
                  </>
              }
              <InputDelete />
            </UploadContainer>
            <Footer />
          </>
          :
          <>
            <Preloader />
          </>
      }
    </div>
  );
}

export default App;
