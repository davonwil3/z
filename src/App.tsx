import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useEffect, useState, createContext, useContext, ReactNode } from "react";

// --- Page components ---
import Home from "./pages/Home";
import Signin from "./pages/sign-in";
import SignUp from "./pages/sign-up";
import Chat from "./pages/chat";
import Settings from "./pages/settings";
import Dashboard from "./pages/dashboard";

// --- Firebase setup ---
import { initializeApp, getApps } from "firebase/app";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// --- Firebase config ---
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "z-ai-f2abc.firebaseapp.com",
  projectId: "z-ai-f2abc",
  storageBucket: "z-ai-f2abc.appspot.com", // fixed typo in domain
  messagingSenderId: "266161520773",
  appId: "1:266161520773:web:003dc9112f4ea40fc5a9ec",
  measurementId: "G-4W6JK36DVE",
};

// --- Init Firebase app safely ---
const firebaseApp =
  getApps().length > 0 ? getApps()[0] : initializeApp(firebaseConfig);

const analytics = getAnalytics(firebaseApp);
export const auth = getAuth(firebaseApp);

// --- Set persistence once ---
setPersistence(auth, browserLocalPersistence).catch((err) =>
  console.error("Error setting auth persistence:", err)
);

// --- Export ID token helper for API calls ---
export async function getIdToken(): Promise<string> {
  const user = auth.currentUser;
  return user ? await user.getIdToken(false) : "";
}

// --- Auth Context ---
interface AuthContextType {
  user: User | null;
  loading: boolean;
}
export const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
});
export const useAuth = () => useContext(AuthContext);

// --- Protect routes from non-logged-in users ---
function PrivateRoute({ children }: { children: ReactNode }) {
  const { user, loading } = useAuth();
  if (loading) return null; // or a loading spinner
  return user ? <>{children}</> : <Navigate to="/signin" replace />;
}

// --- App component ---
function App() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });
    return unsub;
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/chat"
            element={
              <PrivateRoute>
                <Chat />
              </PrivateRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <PrivateRoute>
                <Settings />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
