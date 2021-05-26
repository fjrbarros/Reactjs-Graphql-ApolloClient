import { useQuery } from '@apollo/client';
import { Card, ContainerGrid, Loading, Error } from './components/index';
import INFO_PERSON from './querys/index';

export default function App() {
  const { loading, error, data } = useQuery(INFO_PERSON);
  const results = data?.characters?.results;

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <ContainerGrid >
      {results.map(person => <Card key={person.id} person={person} />)}
    </ContainerGrid>
  );
};