import React, {useState} from 'react';
import MyButton from './Components/UI/button/MyButton';
import MyInput from './Components/UI/input/MyInput';
import PostList from './Components/PostList'
import './Styles/App.css'


function App() {

  const [posts, setPosts] = useState([]);

  const [post, setPost] = useState({title: '', body: ''});
  // const bodyInputRef = useRef();

  const addNewPost = (e) => {
    e.preventDefault();
    setPosts([...posts, {...post, id: Date.now()}]);
    setPost({title: '', body: ''})
  }

  return (
    <div className="App">
      <form>

        {/* Управляемый компонент */}
        <MyInput 
          value={post.title}
          onChange={e => setPost({...post, title: e.target.value})}
          type="text" 
          placeholder="Название поста">
        </MyInput>

        {/* Неуправляемый компонент */}
        <MyInput 
          // ref={bodyInputRef}
          value={post.body}
          onChange={e => setPost({...post, body: e.target.value})}
          type="text" 
          placeholder="Описание поста">
        </MyInput>

        <MyButton onClick={addNewPost}>Создать пост</MyButton>

      </form>
      <PostList posts={posts} title="Posts about JS"/>
    </div>
  );
}

export default App;
