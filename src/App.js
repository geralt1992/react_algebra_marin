import './App.css';

//ovo je hoc koja ce moci prosljediti color / prima komponentu
function withColor(Component) {
  return function() {
    return <Component/>
  }
}

function Button() {
  return <button>Mali Gumb</button>
}

const ColorButton = withColor(Button);

function App() {
  return (
    <div>
        <ColorButton />
    </div>
  );
}

export default App;
