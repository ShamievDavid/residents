import { useState } from 'react';
import './App.scss';
import { Main } from './features/Main';
import { Resident } from './features/Resident/Resident';
import { MishaCard } from './features/MishaCard/MishaCard';
import { NemoCard } from './features/NemoCard/NemoCard';
import { DavidCard } from './features/DavidCard/DavidCard';
import { JunkoidCard } from './features/JunkoidCard/JunkoidCard';

function App() {
  const [blur, setBlur] = useState(false);
  const [showDavid, setShowDavid] = useState(false);
  const [showMisha, setShowMisha] = useState(false);
  const [showNemo, setShowNemo] = useState(false);
  const [showJunkoid, setShowJunkoid] = useState(false);

  console.log('david', showDavid);
  console.log('misha', showMisha);
  console.log('nemo', showNemo);
  console.log('junkoid', showJunkoid);

  return (
    <div className='app_wrapper'>
      <Main blur={blur} />
      {showMisha ? (
        <MishaCard setShow={setShowMisha} show={showMisha} setBlur={setBlur} />
      ) : (
        <Resident
          show={showMisha}
          setShow={setShowMisha}
          setBlur={setBlur}
          blur={blur}
          name="Misha"
          src="./photo/Misha.png"
          width="340px"
          height="340px"
          transform="translate3d(-1303.41px, -256.364px, 0px)"
        />
      )}
      {showNemo ? (
        <NemoCard setShow={setShowNemo} show={showNemo} setBlur={setBlur} />
      ) : (
        <Resident
          show={showNemo}
          setShow={setShowNemo}
          setBlur={setBlur}
          blur={blur}
          name="Nemo Jr."
          src="./photo/Nemo_Jr.png"
          width="340px"
          height="340px"
          transform="translate3d(-620.936px, -401.623px, 0px)"
        />
      )}
      {showDavid ? (
        <DavidCard setShow={setShowDavid} show={showDavid} setBlur={setBlur} />
      ) : (
        <Resident
          show={showDavid}
          setShow={setShowDavid}
          setBlur={setBlur}
          blur={blur}
          name="David"
          src="./photo/Davyd.png"
          width="340px"
          height="340px"
          transform="translate3d(-942.814px, 90.3879px, 0px)"
        />
      )}

      {showJunkoid ? (
        <JunkoidCard
          setShow={setShowJunkoid}
          show={showJunkoid}
          setBlur={setBlur}
        />
      ) : (
        <Resident
          show={showJunkoid}
          setShow={setShowJunkoid}
          name="Junkoid"
          src="./photo/Junkoid.png"
          width="340px"
          height="340px"
          transform="translate3d(-453.16px, 132.458px, 0px)"
        />
      )}
    </div>
  );
}

export default App;
