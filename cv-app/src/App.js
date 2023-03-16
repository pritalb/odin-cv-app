import './styles/App.css';
import Resume from './components/Resume';
import ResumeForm from './components/ResumeForm';

function App() {
  return (
    <div className="app">
        <ResumeForm />
        <Resume />
    </div>
  );
}

export default App;
