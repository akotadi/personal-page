import React from 'react';
import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document';

class CustomDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps };
  }

  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <meta charSet='UTF-8' />
          <link href='https://fonts.googleapis.com/css?family=Inter:300,400,500,700&display=swap' rel='stylesheet' />
          <link href='https://fonts.googleapis.com/css?family=Lato:300,400,500,700&display=swap' rel='stylesheet' />
          <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap' rel='stylesheet' />
          <meta name='theme-color' content='#D9D9D9' />
          <meta name='description' content='Personal Page of Manuel CH' key='description' />
          <link rel='apple-touch-icon' sizes='57x57' href='/assets/apple-icon-57x57.png' />
          <link rel='apple-touch-icon' sizes='60x60' href='/assets/apple-icon-60x60.png' />
          <link rel='apple-touch-icon' sizes='72x72' href='/assets/apple-icon-72x72.png' />
          <link rel='apple-touch-icon' sizes='76x76' href='/assets/apple-icon-76x76.png' />
          <link rel='apple-touch-icon' sizes='114x114' href='/assets/apple-icon-114x114.png' />
          <link rel='apple-touch-icon' sizes='120x120' href='/assets/apple-icon-120x120.png' />
          <link rel='apple-touch-icon' sizes='144x144' href='/assets/apple-icon-144x144.png' />
          <link rel='apple-touch-icon' sizes='152x152' href='/assets/apple-icon-152x152.png' />
          <link rel='apple-touch-icon' sizes='180x180' href='/assets/apple-icon-180x180.png' />
          <link rel='icon' type='image/png' sizes='192x192' href='/assets/android-icon-192x192.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
          <meta name='msapplication-TileColor' content='#D9D9D9' />
          <meta name='msapplication-TileImage' content='/assets/ms-icon-144x144.png' />
          <link rel='manifest' href='/manifest.json' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
