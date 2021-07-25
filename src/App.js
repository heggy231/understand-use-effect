import React, {useState, useEffect} from 'react';

function App() {

  const [counter, setCounter] = useState(99);
  const [posts, setPosts] = useState([]);

  useEffect(() => {

    const postUrl = 'https://jsonplaceholder.typicode.com/posts';

    fetch(postUrl)
    .then(res => res.json())
    .then(resultJson => {
      setPosts(resultJson);
    })
    
  }, [])

  const handleIncrement = () => setCounter(counter + 1);

  const postItem = posts.map(post => {
    return (
      <li key={post.id}>
        Title: {post.title}
        <p>{post.body}</p>
      </li>
    )
  })

  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={handleIncrement}>+</button>
      <h2>Posts</h2>
      <ul>
        {
          posts.length > 0 ? postItem : null
        }
      </ul>
    </div>
  );
}

export default App;
