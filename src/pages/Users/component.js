import React, { useEffect } from 'react';
import { Helmet } from "react-helmet";
import Layout from '../../components/layouts';
import CardUser from '../../components/elements/CardUser';
import Loading from '../../components/elements/Loading';

function Component (props) {
  const { root, users, actions } = props;
  const { isLoading } = root;
  
  useEffect(() => {
    actions.getUsers();
  }, [actions]);

  return (
    <Layout>
      <Helmet>
          <meta charSet="utf-8" />
          <title>Users</title>
      </Helmet>

      {isLoading ? (
        <Loading />
      ) : (
        <div className="w-full flex flex-wrap">
          {users && users.map((user) => (
            <CardUser className="w-full md:w-1/2 p-2" title={user.name} id={user.id} body={user.username} />
          ))}
        </div>
      )}
    </Layout>
  );
}

export default Component;

