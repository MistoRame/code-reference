import { useRef, useState } from "react";

function RGBDemo() {
  const containerRef = useRef(null);

  const [positions, setPositions] = useState({
    rosso: { x: 45, y: 60 },
    verde: { x: 120, y: 190 },
    blu: { x: 205, y: 60 },
  });

  const [hsl, setHsl] = useState({
    rosso: { h: 0, s: 100, l: 50 },
    verde: { h: 120, s: 100, l: 50 },
    blu: { h: 240, s: 100, l: 50 },
  });

  const [rgb, setRgb] = useState({
    r: 255,
    g: 0,
    b: 0,
  });

  const dragging = useRef(null);

  const handleMouseDown = (color) => (e) => {
    dragging.current = {
      color,
      startX: e.clientX,
      startY: e.clientY,
    };
  };

  const handleMouseMove = (e) => {
    if (!dragging.current) return;

    const { color, startX, startY } = dragging.current;

    const dx = e.clientX - startX;
    const dy = e.clientY - startY;

    setPositions((prev) => ({
      ...prev,
      [color]: {
        x: prev[color].x + dx,
        y: prev[color].y + dy,
      },
    }));

    dragging.current.startX = e.clientX;
    dragging.current.startY = e.clientY;
  };

  const handleMouseUp = () => {
    dragging.current = null;
  };

  const handleChange = (channel) => (e) => {
    const value = parseInt(e.target.value);

    setRgb((prev) => ({
      ...prev,
      [channel]: value,
    }));
  };

  const handleHSLChange = (colore, tipo) => (e) => {
    const value = e.target.value;

    setHsl((prev) => ({
      ...prev,
      [colore]: {
        ...prev[colore],
        [tipo]: value,
      },
    }));
  };

  function ControlliCerchio({ nome, colore, valori, onChange }) {
    return (
      <div className="controllo-singolo">
        <label className="label-cerchio">{nome}</label>
        <label>Tonalità</label>
        <input
          type="range"
          min="0"
          max="360"
          value={valori.h}
          onChange={onChange("h")}
        />
        <label>Saturazione</label>
        <input
          type="range"
          min="0"
          max="100"
          value={valori.s}
          onChange={onChange("s")}
        />
        <label>Luminosità</label>
        <input
          type="range"
          min="0"
          max="100"
          value={valori.l}
          onChange={onChange("l")}
        />
        <code>
          hsl({valori.h}, {valori.s}%, {valori.l}%)
        </code>
      </div>
    );
  }

  return (
    <div
      className="rgb-demo"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div className="rgb-container" ref={containerRef}>
        <div
          className="cerchio rosso"
          onMouseDown={handleMouseDown("rosso")}
          style={{
            transform: `translate(${positions.rosso.x}px, ${positions.rosso.y}px)`,
            backgroundColor: `hsl(${hsl.rosso.h}, ${hsl.rosso.s}%, ${hsl.rosso.l}%)`,
          }}
        />

        <div
          className="cerchio verde"
          onMouseDown={handleMouseDown("verde")}
          style={{
            transform: `translate(${positions.verde.x}px, ${positions.verde.y}px)`,
            backgroundColor: `hsl(${hsl.verde.h}, ${hsl.verde.s}%, ${hsl.verde.l}%)`,
          }}
        />

        <div
          className="cerchio blu"
          onMouseDown={handleMouseDown("blu")}
          style={{
            transform: `translate(${positions.blu.x}px, ${positions.blu.y}px)`,
            backgroundColor: `hsl(${hsl.blu.h}, ${hsl.blu.s}%, ${hsl.blu.l}%)`,
          }}
        />
      </div>

 <div className="rgb-controlli">  
      <ControlliCerchio
        nome="Cerchio Rosso"
        colore="rosso"
        valori={hsl.rosso}
        onChange={(tipo) => handleHSLChange("rosso", tipo)}
      />
      <ControlliCerchio
        nome="Cerchio Verde"
        colore="verde"
        valori={hsl.verde}
        onChange={(tipo) => handleHSLChange("verde", tipo)}
      />
      <ControlliCerchio
        nome="Cerchio Blu"
        colore="blu"
        valori={hsl.blu}
        onChange={(tipo) => handleHSLChange("blu", tipo)}
      />
      </div>
    </div>
  );
}

export default RGBDemo;
