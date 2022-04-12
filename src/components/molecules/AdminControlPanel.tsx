import { Link } from 'react-router-dom';

export default function AdminControlPanel() {
  return (
    <div className="flex gap-2">
      <Link to="/challenge/create"><button type="button" className="text-black">lag utfording</button></Link>
      <Link to="/challenge/delete"><button type="button" className="text-black">slett utfordring</button></Link>
    </div>
  );
}
