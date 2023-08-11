import Link from 'next/link';
export default function NotFound() {
  return (
    <div className="flex justify-center h-[100vh] w-full items-center">
      <div className="text-center">
        <div className="w-[100vw] text-center">404 Page Not found</div>
        <div>
          <Link href="/" className="text-cyan-700 underline">
            Go Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
