import Head from 'next/head';
import { Field, Form, Formik } from 'formik';
import { saleSchema } from '../helpers/schemas';
import Header from '../components/Header';
import Tutorial from '../components/Tutorial';

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
            <Form>
              <fieldset>
                <ul className='flex flex-wrap' role='group' aria-labelledby='checkbox-group'>
                  <li className='block cursor-pointer h-8 relative w-1/24'>
                    <Field
                      className='absolute h-full invisible w-full z-10'
                      type='checkbox'
                      name='checked'
                      value='001'
                    />
                    <span className='absolute bg-black h-full left-0 rounded text-center text-white text-2xl top-0 w-full z-0'>001</span>
                  </li>
                </ul>
              </fieldset>
              <fieldset>
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
              </fieldset>
            </Form>
          )}
        </Formik>
      </main>
    </>
  )
}
