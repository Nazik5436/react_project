import { useState } from "react";

export const List = () => {
    const[activeBlock, setActiveBlock] = useState(false)

    const toggleBlock = () => {
        setActiveBlock(!activeBlock)
    }

    const users = [
      { id: 1, name: "John Deer" },
      { id: 2, name: "Jagermeiser" },
    ];
  
    return (
      <div>
        <h2 onClick={() => toggleBlock()}>List</h2>
        {activeBlock && (

        <div>
          {users.map((user) => (
            <p key={user.id}>{user.name}</p>
          ))}
        </div>
        )}
    </div>
    );
  };