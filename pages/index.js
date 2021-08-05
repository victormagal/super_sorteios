import Head from 'next/head';
import { Field, Form, Formik } from 'formik';
import { saleSchema } from '../helpers/schemas';
import Header from '../components/Header';
import Tutorial from '../components/Tutorial';

export default function Home() {
  const onSubmit = (values, actions) => {
    // console.log(values);
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    }).then((res) => {
      console.log('Response received');
      if (res.status === 200) {
        console.log('Response secceeded');
      }
    })
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
            message: ''
          }}
          onSubmit={onSubmit}
          validationSchema={saleSchema}
        >
          {({ errors, handleChange, values }) => (
            <Form>
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
