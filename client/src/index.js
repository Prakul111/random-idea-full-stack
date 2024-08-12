import './styles/bootstrap.bundle.min.js'
import '@fortawesome/fontawesome-free/css/all.css';
import './styles/main.css';
import modal from './components/Modal';
import IdeaForm from './components/ideaForm';
import IdeaList from './components/IdeaList';


const Modal = new modal();

const ideaForm = new IdeaForm();
ideaForm.render();

const ideaList = new IdeaList();
ideaList.render();












