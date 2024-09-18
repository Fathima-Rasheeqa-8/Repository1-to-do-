import './App.css';
import React, { useState, useEffect } from 'react';
import { FaTrash } from "react-icons/fa";
import Footer from './Footer';
import AddItem from './AddItem';
import Search from './Search';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem("todo_list"));
    if (savedItems) {
      setItems(savedItems);
    }
  }, []);

  function deleteList(id) {
    const afterDelete = items.filter(i => i.id !== id);
    setItems(afterDelete);
    localStorage.setItem("todo_list", JSON.stringify(afterDelete));
  }

  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');

  const submitItem = (e) => {
    e.preventDefault();
    addItem(newItem);
    setNewItem('');
  }

  const addItem = (i) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const currentDate = new Date().toLocaleDateString(); 
    const addNewItem = { id, item: i, date: currentDate };
    const updatedList = [...items, addNewItem];
    setItems(updatedList);
    localStorage.setItem("todo_list", JSON.stringify(updatedList));
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>To-Do List</h1>
      </header>
      <div>
        <AddItem 
          newItem={newItem}
          setNewItem={setNewItem}
          submitItem={submitItem}
        />
        <Search
          search={search}
          setSearch={setSearch}
        />
        <ul>
          {items
            .filter(i => i.item.toLowerCase().includes(search.toLowerCase()))
            .map(i => (
              <li key={i.id}>
                <input type="checkbox" />
                <label style={{ textDecoration: 'none' }}>{i.item}</label>
                <br />
                <small>{i.date}</small> {/* Display the date here */}
                <button onClick={() => deleteList(i.id)}>
                  <FaTrash />
                </button>
              </li>
            ))}
        </ul>
      </div>
      <Footer
        items={items}
      />
    </div>
  );
}

export default App;
