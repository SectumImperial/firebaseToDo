// import { auth } from '../../firebase/firebaseConfig';
// import { useState } from 'react';

// function SignIn() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSignIn = async () => {
//     try {
//       await auth.signInWithEmailAndPassword(email, password);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//       <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//       <button onClick={handleSignIn}>Sign In</button>
//     </div>
//   );
// }
