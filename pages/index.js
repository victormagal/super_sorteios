import Head from 'next/head';
import { Field, Form, Formik } from 'formik';
import { saleSchema } from '../helpers/schemas';
import Header from '../components/Header';
import Tutorial from '../components/Tutorial';
import GlobalStyle from '../styles/global';

import { numbers } from '../helpers/numbers';

export default function Home() {
  const onSubmit = (values, actions) => {
    console.log(values);
    // fetch('/api/contact', {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json, text/plain, */*',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(values)
    // }).then((res) => {
    //   console.log('Response received');
    //   if (res.status === 200) {
    //     console.log('Response secceeded');
    //   }
    // })
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
        <Formik
          initialValues={{
            name: '',
            email: '',
            message: '',
            checked: [],
          }}
          onSubmit={onSubmit}
          validationSchema={saleSchema}
        >
          {({ handleChange, values }) => (
            <Form className='my-12'>
              <fieldset>
                <ul className='lg:container lg:mx-auto flex flex-wrap justify-center' role='group' aria-labelledby='checkbox-group'>
                  {numbers.map((number, index) => (
                    <li key={index} className='block cursor-pointer h-8 mb-2 mx-1 relative w-1/24'>
                      {number.status === 'available' &&
                        <Field
                          className='absolute h-full invisible w-full z-10' 
                          type='checkbox'
                          name='checked'
                          value={number.value}
                        />
                      }
                      <span className={`absolute ${number.status} h-full left-0 rounded text-center text-2xl top-0 w-full z-0`}>{number.value}</span>
                    </li>
                  ))}
                </ul>
              </fieldset>
              {/* <fieldset>
                <ul>
                  <li>
                    <Field
                      type='text'
                      id='name'
                      name='name'
                      placeholder='Nome completo'
                      onChange={handleChange}
                      value={values.name}
                    />
                  </li>
                  <li>
                    <Field 
                      type='email'
                      id='email'
                      name='email'
                      placeholder='Seu email'
                      onChange={handleChange}
                      value={values.email}
                    />
                  </li>
                  <li>
                    <Field
                      type='text'
                      id='message'
                      name='message'
                      placeholder='Mensagem'
                      onChange={handleChange}
                      value={values.message}
                    />
                  </li>
                  <li>
                    <button type='submit'>Enviar</button>
                  </li>
                </ul>
              </fieldset> */}
            </Form>
          )}
        </Formik>
      </main>
    </>
  )
}
