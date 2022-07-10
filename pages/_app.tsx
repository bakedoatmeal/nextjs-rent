import 'styles/tailwind.css';
import Layout from '../components/Layout'
import { UserProvider } from '@auth0/nextjs-auth0'
import {ApolloProvider} from '@apollo/client'
import apolloClient from 'lib/apollo';
import { User } from 'graphql/types';

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <ApolloProvider client={apolloClient}>
      <Layout>
        <div className="bg-gray-900 py-56">
          <Component {...pageProps} />
        </div>
      </Layout>
    </ApolloProvider>
    </UserProvider>
  );
}

export default MyApp;
