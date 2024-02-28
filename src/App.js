import AppBar from "./compo/AppBar/AppBar";
import BoardBar from "./compo/BoardBar/BoardBar";
import BoardContent from "./compo/BoardContent/BoardContent";

function App() {
    return(
      <div className="trello-overall">
        <AppBar />
        <BoardBar />
        <BoardContent />        
      </div>
    );
}

export default App;