import './App.css';

function MyCard() {
  return (
    
    <div>
      <div className='topbuttons'>
        <button className='dupe'>Duplicate</button>
        <button className='changebg'>Change Background</button>
        <button className='changehg'>Change Heading</button>
        <button className='del' id='del'>Delete</button>
      </div>

      <div className='overallcard'>

        <div className='box'>

        <img className='pic' src='https://pbs.twimg.com/media/FajpQj_XwAEwCWw.jpg' alt='the brim reaper'></img>

        <div className='heading'>
          <h1>the brim reaper</h1>
        </div>

        <div className='details'>
          <h3>fear the reaper</h3>
        </div>

        <div className='reveal'>
          <button className='detailsbutton'>Details</button>
        </div>

        </div>

      </div>
    </div>  
    

  
  
  );
}



export default MyCard;
