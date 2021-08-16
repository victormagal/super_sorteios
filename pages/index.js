/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import router from 'next/router';
import Head from 'next/head';
import { Field, Form, Formik } from 'formik';
import InputMask from 'react-input-mask';
import { numbers } from '../helpers/numbers';
import { saleSchema } from '../helpers/schemas';
import GlobalStyle from '../styles/global';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Labels from '../components/Labels';
import Number from '../components/number';
import Rules from '../components/rules';
import Tutorial from '../components/Tutorial';



export default function Home() {
  const onSubmit = (values) => {
    let phoneNumber = '5561996108176';
    let message = encodeURIComponent(`Me chamo ${values.name}.\n\nMeu telefone para contato é ${values.phone} e meu email, ${values.email}.\n\nOs números que escolhi são: ${values.numbers}.`);
    let url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
    router.push(url);
  }

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Super Sorteios</title>
        <meta name="description" content="Super Sorteios" />
        <link rel="icon" href="/favicon.ico" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '419294856155990');
              fbq('track', 'PageView');
            `
          }}
        />
        <noscript>
          <img 
            height="1"
            width="1" 
            style={{ display: 'none' }} 
            src={`https://www.facebook.com/tr?id=419294856155990&ev=PageView&noscript=1`}
          />
        </noscript>
      </Head>
      <main>
        <Header />
        <Tutorial />
        <Labels />
        <Formik
          initialValues={{
            email: '',
            name: '',
            numbers: [],
            phone: '',
          }}
          onSubmit={onSubmit}
          validationSchema={saleSchema}
        >
          {({ errors, handleChange, values }) => (
            <Form className='my-12'>
              <fieldset>
                <ul className='lg:container lg:mx-auto flex flex-wrap justify-center' role='group' aria-labelledby='checkbox-group'>
                  {numbers.map((number, index) => (
                    <li key={index} className='block lg:h-8 h-6 mb-2 mx-1 relative lg:w-1/24 w-1.5/12'>
                      <Number
                        handleChange={handleChange}
                        status={number.status}
                        value={number.value}
                      />
                    </li>
                  ))}
                  <p className='text-sm text-center text-red-500 w-full'>{errors.numbers}</p>
                </ul>
              </fieldset>
              <fieldset className='lg:container lg:mx-auto grid lg:grid-cols-12 grid-cols-4 gap-4'>
                <ul className='col-span-4 lg:col-start-5 pt-6 lg:px-0 px-4'>
                  <li className='mb-4'>
                    <Field
                      className='px-2 py-1 rounded text-lg w-full'
                      type='text'
                      id='name'
                      name='name'
                      placeholder='Nome completo'
                      onChange={handleChange}
                      value={values.name}
                    />
                    <p className='text-sm text-red-500'>{errors.name}</p>
                  </li>
                  <li className='mb-4'>
                    <Field 
                      className='px-2 py-1 rounded text-lg w-full'
                      type='text'
                      id='email'
                      name='email'
                      placeholder='Seu email'
                      onChange={handleChange}
                      value={values.email}
                    />
                    <p className='text-sm text-red-500'>{errors.email}</p>
                  </li>
                  <li className='mb-4'>
                    <InputMask
                      className='px-2 py-1 rounded text-lg w-full'
                      type='text'
                      mask='(99) 99999-9999'
                      id='phone'
                      name='phone'
                      placeholder='(XX) XXXXX-XXXX'
                      onChange={handleChange}
                      value={values.phone}
                    />
                    <p className='text-sm text-red-500'>{errors.phone}</p>
                  </li>
                  <li className='flex justify-end'>
                    <button className='py-1 rounded text-lg text-white lg:w-2/6 w-full' type='submit'>Enviar</button>
                  </li>
                </ul>
              </fieldset>
            </Form>
          )}
        </Formik>
        <Rules />
        <Footer />
      </main>
    </>
  )
}
