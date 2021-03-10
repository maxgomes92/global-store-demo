import { AppProvider } from './store'
import './App.css'
import Card from './Card'
import Cards from './Cards';
import Form from './Form'
import Header from './Header';
import Profile from './Profile';

function App() {
  return (
    <AppProvider>
      <Header />
      <Cards>
        <Card>
          <Form />
        </Card>

        <Card>
          <Profile />
        </Card>
      </Cards>
    </AppProvider>
  );
}

export default App;
