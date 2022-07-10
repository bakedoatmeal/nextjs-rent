import 'styles/tailwind.css';
import {ApolloProvider} from '@apollo/client'
import apolloClient from 'lib/apollo';

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={apolloClient}>
      <div className="bg-gray-900 py-56">
        <Component {...pageProps} />
      </div>
    </ApolloProvider>
  );
}

export default MyApp;
