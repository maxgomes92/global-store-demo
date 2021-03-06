import './App.css'
import Card from './Card'
import Cards from './Cards';
import Form from './Form'
import Header from './Header';
import Profile from './Profile';

function App() {
  return (
    <>
      <Header />
      <Cards>
        <Card>
          <Form />
        </Card>

        <Card>
          <Profile />
        </Card>
      </Cards>
    </>
  );
}

export default App;
