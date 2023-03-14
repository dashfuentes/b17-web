import './App.css'
import { Home } from './components/Home'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

function App() {

  const client = new ApolloClient( {
    cache: new InMemoryCache(),
    uri: "http://localhost:3000/"
 })

  return (
    
    <ApolloProvider client={client}>
      
      <Home />

   </ApolloProvider>
  

  )
}

export default App
