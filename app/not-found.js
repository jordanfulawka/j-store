import Link from 'next/link';

function Page() {
  return (
    <div>
      <h2>Page not found :(</h2>
      <Link href='/'>
        <button>Home</button>
      </Link>
    </div>
  );
}

export default Page;
