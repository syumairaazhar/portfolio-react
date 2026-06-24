import { useState } from "react";

function Skills() {
  const [show, setShow] = useState(false);

  return (
    <div className="skills">
      <button onClick={() => setShow(!show)}>
        {show ? "Hide Skills" : "Show Skills"}
      </button>

      {show && (
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>PHP</li>
          <li>Docker</li>
        </ul>
      )}
    </div>
  );
}

export default Skills;