import { IoAddCircleOutline } from "react-icons/io5";
import './AddItem.css'; // Import the CSS file

const AddItem = ({newItem,setNewItem,submitItem}) => {
  return (
    <div className="add-item-container">
      <div className="input-wrapper">
        <form onSubmit={submitItem}>
        <input
          type="text"
          className="add-item-input"
          placeholder="Add a new item..."
          value={newItem}
          onChange={(e)=>setNewItem(e.target.value)}
          required
        />
        <button  type="submit">
           <IoAddCircleOutline className="add-item-icon" />
        </button>
        </form>
      </div>
    </div>
  );
}

export default AddItem;
