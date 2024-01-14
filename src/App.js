import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import AddItem from './AddItem';
import { useState } from 'react';
import SearchItems from './SearchItems';
function App(){
  let [items, setitems] = useState(JSON.parse(localStorage.getItem("newl")));
  const [newItem,setNewItem]=useState("")
  const [search,setSearch]=useState("")
  const addItem=(item)=>{
    const id=items.length ? items[items.length-1].id+1:1
    const addNewItem={id,checked:false,item}
    const ListItems=[...items,addNewItem]
    setitems(ListItems)
    localStorage.setItem("newl", JSON.stringify(ListItems))
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!newItem) return;
    addItem(newItem)
    setNewItem("")
  }
  const handlecheck = (id) => {
    const newl = items.map((item) => {
      if (item.id === id) { return { ...item, checked: !item.checked } }
      else {
        return item
      }
    })
    setitems(newl)
    localStorage.setItem("newl", JSON.stringify(newl))
  }
  const handledelete = (id) => {
    const newl = items.filter((item) => {
      if (item.id !== id) { return { ...item } }
    })
    console.log(newl)
    setitems(newl)
    localStorage.setItem("newl", JSON.stringify(newl))
  }
  return (
    <div className='app'>
      <Header title="To Do List"/> 
      <AddItem 
      newItem={newItem}
      setNewItem={setNewItem}
      handleSubmit={handleSubmit}
      />
      <SearchItems 
      search={search}
      setSearch={setSearch}
      />
      <Content
      items={items.filter(item=>((item.item).toLowerCase()).includes(search.toLowerCase()))}
      handlecheck={handlecheck}
      handledelete={handledelete}
      />
      <Footer
      length={items.length}
      />
    </div>
  );
}
export default App;
