import React from 'react';
import Link from 'next/link';
import {gql, useQuery} from '@apollo/client'

const FindRentsQuery = gql`
  query ($rentLogsFindId: String!){
    rentLogFind (rentLogsFindId: $rentLogsFindId) {
      address
      rentalSize
      rent
    }
  }
`

const SingleRentLog = (rentLogsFindId) => {


  const {data, loading, error} = useQuery(FindRentsQuery, {
    variables: rentLogsFindId,
  })

  if (loading) return null;
  if (error) return `Error! ${error}`;

  return (
    <div className="prose prose-blue text-white mx-auto h-screen">
      <Link href="/index">
        <a>Go back</a>
      </Link>
      <p>{data.address}</p>
      <p>
        {data.rentalSize}
      </p>
      <p>{data.rent}</p>
    </div>
  );
};

export default SingleRentLog;

