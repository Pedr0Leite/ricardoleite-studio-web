import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Home() {

  const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push("/studio");
        }, 100);
    });

  return 
}
