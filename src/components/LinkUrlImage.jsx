import '../css/LinkUrlImage.css';

const LinkUrlImage = ({ url }) => {
  const copy = (e) => {
    const url = e.target.parentElement.children[0].outerText;

    navigator.clipboard.writeText(url)
      .then(() => {
        console.log("Text copied to clipboard...")
      })
      .catch(err => {
        console.log('Something went wrong', err);
      })
  }
  return (
    <div className='linkUrlImageContainer'>
      <p>{url}</p>
      <button type='button' className='buttonCopy' onClick={copy} >Copy</button>
    </div>
  );
};

export default LinkUrlImage