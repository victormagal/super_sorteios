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
import Regulation from '../components/regulation';
import Tutorial from '../components/Tutorial';



export default function Home() {
  const onSubmit = (values) => {
    let phoneNumber = '5561996865174';
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
                    <li key={index} className='block h-8 mb-2 mx-1 relative w-1/24'>
                      <Number
                        handleChange={handleChange}
                        status={number.status}
                        value={number.value}
                      />
                    </li>
                  ))}
                  <p className='text-sm text-red-500'>{errors.numbers}</p>
                </ul>
              </fieldset>
              <fieldset className='lg:container lg:mx-auto grid grid-cols-12 gap-4'>
                <ul className='col-span-4 col-start-5 pt-6'>
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
                    <button className='px-8 py-1 rounded text-lg text-white' type='submit'>Enviar</button>
                  </li>
                </ul>
              </fieldset>
            </Form>
          )}
        </Formik>
        <Regulation />
        <Footer />
      </main>
    </>
  )
}
