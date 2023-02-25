import Head from 'next/head';
import Link from 'next/link';
import { Button } from '@arco-design/web-react';

export default function Home() {
  return (
    <>
      <Head>
        <title>ERD</title>
        <meta
          name="description"
          content="Database design tool based on entity relation diagram"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="index-container">
        <div className="index-bg">
          <Link href="/graphs">
            <Button
              type="primary"
              size="large"
              className="start-button"
              style={{
                fontSize: '2em',
                height: 'auto',
              }}
            >
              Get started
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
