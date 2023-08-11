# How to create found and not found pages route

* 1. create directory app/[..not-found]
* 2. create app/[..not-found]/page.js

```
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
```

* It is work if any page not found in params url enter by user

## But you need to access globle page not found. follow first 2 step than follow below steps

* 3. create app/not-found.js file
* 4. copy app/[..not-found]/page.js contain and paste inside app/not-found.js
* 5. replace below contain in app/[..not-found]/page.js

```
import { notFound } from 'next/navigation';
export default function NotFoundCatchALL() {
  notFound();
}
```

* 6. create app/(found) directory
* 7. cut all folder inside app/(found) except app/[..not-found] folder.
* 8. cut page.js inside app/(found)
* 9. copy layout.js inside  app/(found)
* 10. app/(found)/layout.js change file as RootLayout to Layout

## it's done you not found route work successfully.


`One More thing to learn here you can use notFound ( Step-5 ) component whenever you need. for example you can't find data on server you need just called notFound();
`
