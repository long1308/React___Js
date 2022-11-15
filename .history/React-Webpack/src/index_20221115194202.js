import React from "react"; // nạp thư viện react
import ReactDOM from "react-dom"; // nạp thư viện react-dom

// Tạo component App
function App() {
  return (
    <div>
      <h1>Xin chào anh em F8!</h1>
    </div>
  );
}

// Render component App vào #root element
//react 17
// ReactDOM.render(<App />, document.getElementById("root"));
const root = React.createRoot(document.getElementById("root"));
root.render(<App />);
