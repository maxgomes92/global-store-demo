import { useState } from 'react'
import './App.css'
import Card from './Card'
import Cards from './Cards';
import Form from './Form'
import Header from './Header';
import Profile from './Profile';

function App() {
  const [userData, setUserData] = useState({})

  const onSuccess = (data) => {
    console.log('formData', data)

    setUserData(data)
  }

  return (
    <>
      <Header firstName={userData.firstName} />
      <Cards>
        <Card>
          <Form onSuccess={onSuccess} />
        </Card>

        <Card>
          <Profile />
        </Card>
      </Cards>
    </>
  );
}

export default App;
