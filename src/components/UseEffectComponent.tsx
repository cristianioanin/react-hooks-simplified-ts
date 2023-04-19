import { useState, useEffect } from 'react';

enum Resource {
  POSTS = 'posts',
  USERS = 'users',
  COMMENTS = 'comments',
}

function UseEffectComponent() {
  const [resource, setResource] = useState(() => Resource.POSTS);
  const [items, setItems] = useState(() => []);
  const [windowWidth, setWindowWidth] = useState(() => window.innerWidth);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resource}?_limit=10`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resource]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <h1>useEffect</h1>
      <div>
        <button onClick={() => setResource(Resource.POSTS)}>Posts</button>
        <button onClick={() => setResource(Resource.USERS)}>Users</button>
        <button onClick={() => setResource(Resource.COMMENTS)}>Comments</button>
      </div>
      <h1>Currently selected resource: {resource}</h1>
      {items.map((item: any) => {
        return <pre>{JSON.stringify(item)}</pre>;
      })}
      <h2>Window width: </h2>
      <span>{windowWidth}</span>
    </>
  );
}

export default UseEffectComponent;
