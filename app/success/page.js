import Link from 'next/link';

function Success() {
  return (
    <div className='page-container'>
      <h2>Thank you for your purchase!</h2>
      <Link href='/'>
        <button>Continue &rarr;</button>
      </Link>
    </div>
  );
}

export default Success;
