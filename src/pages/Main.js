import Person from '../components/person/Person';
import Menu from '../components/menu/Menu';

function Main() {
    return (
      <div className="Resume">
        <div className='Top'>
        </div>
        <div className='Bottom'>
          <div className='Left'><Menu/></div>
            <div className='Right'><Person/></div>
        </div>
      </div>
    );
  }
  
  export default Main;