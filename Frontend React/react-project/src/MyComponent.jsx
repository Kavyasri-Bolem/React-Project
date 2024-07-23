import React, { useState } from 'react';

function MyComponent() {
  // Define the initial state as an array of objects
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
  ]);

  // Function to update the state
  const addItem = () => {
    const newItem = {
      id: items.length + 1,
      name: `Item ${items.length + 1}`
    };
    setItems([...items, newItem]); // Add the new item to the array
  };

  return (
    <div>
      <h1>Items</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <button onClick={addItem}>Add Item</button>
    </div>
  );
}

export default MyComponent;