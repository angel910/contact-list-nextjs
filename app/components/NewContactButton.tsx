import Button from 'react-bootstrap/Button';
import { useRouter } from 'next/navigation';

export function NewContactButton() {
  const router = useRouter();

  const handleNewContactClick = () => {
    router.push('/contacts/new')
  }
  
  return (
    <>
      <div  className='addContactBtn' style={{margin: '8px'}}>
      <Button variant="primary" onClick={handleNewContactClick}>
        Add Contact
      </Button>
      </div>
    </>
  );
}