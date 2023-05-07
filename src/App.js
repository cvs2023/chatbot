import "./App.css";
import ChatBot from "react-simple-chatbot";
import { queries } from "./queries/queries";
import { Segment } from "semantic-ui-react";
function App() {
  return (
    <div className="App">
      <Segment floated="right">
        <ChatBot steps={queries} />
      </Segment>
    </div>
  );
}

export default App;
