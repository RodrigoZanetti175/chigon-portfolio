import Nav from "./components/nav.jsx"

export default function Bio() {
  return (
    <div id="section" className="absolute w-full h-full bg-[radial-gradient(circle_at_158px_159px,#7449F2_5%,#3E11C6_45%,rgba(4,9,149,1)_100%)] bg-cover bg-no-repeat">
      <Nav></Nav>
      <div className="ml-[128px]"> {/* Adjust margin-left based on nav width */}
      </div>
    </div>
  );        
}

export function Links() {
  return (
    <div></div>
  );
}

export function Musics() {
  return (
    <div></div>
  );
}