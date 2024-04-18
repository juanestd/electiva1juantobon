import { AppRouter } from "./router/AppRouter";
import appFirebase from '../src/credenciales'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
const auth = getAuth(appFirebase)

function App() {
	return <AppRouter />;
}

export default App;