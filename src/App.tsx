import Sidebar from './components/Sidebar';
import ActionButtons from './components/ActionButtons';
import AlbumSuggestions from './components/AlbumSuggestions/AlbumSuggestions';
import PlaylistsSuggestions from './components/PlaylistsSuggestions/PlaylistsSuggestions';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="h-screen flex flex-col">
      <div className='flex flex-1'>
        <Sidebar />
        <main className="flex-1 p-6">
          <ActionButtons />
          <AlbumSuggestions />
          <PlaylistsSuggestions />
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default App
