import React from "react";

import toastr from "toastr";

function App() {
  return (
    <div className="App">
      <button
        onClick={() => toastr.info("16/09 não havera expediente", "Aviso!", {
          progressBar: true,
          closeButton: true,
          timeOut: 3000,
          onHidden: () => console.log('finalizou')
        })}
      > notification info </button>
    </div>
  );
}

export default App;
