# useEffect api call react functional component

- useEffect replaces ComponentDidMount and ComponentDidUpdate.  Once the component is mounted, it will run the effect.


jsonplaceholder api posts data:

```json
[
  {
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  }, {}, {}]
```

When api call is called for the following code:
```js

  useEffect(() => {

    const postUrl = 'https://jsonplaceholder.typicode.com/posts';

    fetch(postUrl)
    .then(res => res.json())
    .then(resultJson => {
      setPosts(resultJson);
    })

  }) // no optional dependency array has been passed which mean useEffect will get called again and again since setPosts will update state which trigger useEffect again and again! 

// *************************************************

  useEffect(() => {
    const postUrl = 'https://jsonplaceholder.typicode.com/posts';

    fetch(postUrl)
    .then(res => res.json())
    .then(resultJson => {
      setPosts(resultJson);
    })

  }, [posts])
```

* When does UseEffect get called?

1. api call is made (first time when app component is loaded) when the component is mounted
2. Run useEffect whenever Optional array dependency is updated.  For this case, when anything [posts] state is changed (`setPosts(resultJson)`), the api call is made (aka, call useEffect again!)  this is going to make the infinite loop again since `setPosts` will trigger which cause the update in posts state.  

- Solution: pass the empty array as the optional array dependency. `[]`

```js

  useEffect(() => {
    const postUrl = 'https://jsonplaceholder.typicode.com/posts';

    fetch(postUrl)
    .then(res => res.json())
    .then(resultJson => {
      setPosts(resultJson);
    })
  }, []) // pass empty array as optional array dependency.
```
Passing no dependency inside of dependency array means useEffect has nothing to be called for when any state gets updated in my app. therefore it will only call the api call once!  Since useEffect has no dependency.  Only time useEffect fires is componentDidMount.

* call out: `useEffect()` is use for 2 different purposes: 
  1. componentDidMount: 
  2. componentDidUpdate:
