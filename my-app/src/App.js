import React, {useState} from 'react';
import Counter from './Components/Counter'
import PostItem from './Components/PostItem'
import PostList from './Components/PostList'
import './Styles/App.css'


function App() {

  const [posts1, setPosts1] = useState([
    {id: 1, title: 'JavaScript 1', body: 'Description'},
    {id: 2, title: 'JavaScript 2', body: 'Description'},
    {id: 3, title: 'JavaScript 3', body: 'Description'}
  ])

  const [posts2, setPosts2] = useState([
    {id: 1, title: 'Python 1', body: 'Description'},
    {id: 2, title: 'Python 2', body: 'Description'},
    {id: 3, title: 'Python 3', body: 'Description'}
  ])


  return (
    <div className="App">
      <PostList posts={posts1} title = 'Posts about JS'/>
      <PostList posts={posts2} title = 'Posts about Python'/>

      <Counter/>
    </div>
  );
}

export default App;
