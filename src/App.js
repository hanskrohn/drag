import './App.css';

function App() {
  function dragOver(event) {
    event.preventDefault();
    return false;
  }
  function dragStart(event) {
    var style = window.getComputedStyle(event.target, null);
    var str = (parseInt(style.getPropertyValue("left")) - event.clientX) + ',' + (parseInt(style.getPropertyValue("top")) - event.clientY) + ',' + event.target.id;
    event.dataTransfer.setData("Text", str);
  }
  function drop(event) {
    var offset = event.dataTransfer.getData("Text").split(',');
    var dm = document.getElementById(offset[2]);
    dm.style.left = (event.clientX + parseInt(offset[0], 10)) + 'px';
    dm.style.top = (event.clientY + parseInt(offset[1], 10)) + 'px';
    event.preventDefault();
    return false;
  }
  return (
    <div style={{minHeight: "100vh"}} onDragOver={dragOver} onDrop={drop}>
      <div draggable onDragStart={dragStart} style={{left: "0px", top: "0px", position: "absolute"}} id="me">
        Draggable
      </div>
    </div>
  );
}

export default App;
