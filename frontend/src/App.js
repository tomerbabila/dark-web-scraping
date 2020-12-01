import './styles/App.css';
import Posts from './components/Posts';
import Analytics from './components/Analytics';
import Split from 'react-split';

function App() {
  return (
    <div className='App'>
      <h1>Stronghold Paste Scraper</h1>
      <Split
        className='content'
        sizes={[40, 60]}
        minSize={300}
        expandToMin={false}
        gutterSize={10}
        gutterAlign='center'
        snapOffset={30}
        dragInterval={1}
        cursor='col-resize'
      >
        <Posts />
        <Analytics />
      </Split>
    </div>
  );
}

export default App;
