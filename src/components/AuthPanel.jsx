import { useState } from "react";
import { useFavorites } from "../context/useFavorites";

const AuthPanel = () => {
  const { signIn, signUp, setError } = useFavorites();
  const [mode, setMode] = useState("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(event) {
    event.preventDefault();
    setBusy(true);
    setMessage("");
    setError("");
    const result = mode === "signin"
      ? await signIn(email, password)
      : await signUp(email, password);
    if (result.error) setMessage(result.error);
    else if (mode === "signup") setMessage("Account created. Check your email if confirmation is enabled.");
    setBusy(false);
  }

  return (
    <section className="w-full max-w-md rounded-lg border border-gray-800 bg-[#15131B] p-5 sm:p-7">
      <div className="mb-5 flex border-b border-gray-800">
        <button type="button" onClick={() => setMode("signin")} className={`flex-1 border-b-2 py-3 text-sm font-semibold ${mode === "signin" ? "border-violet-400 text-white" : "border-transparent text-gray-400"}`}>Sign in</button>
        <button type="button" onClick={() => setMode("signup")} className={`flex-1 border-b-2 py-3 text-sm font-semibold ${mode === "signup" ? "border-violet-400 text-white" : "border-transparent text-gray-400"}`}>Create account</button>
      </div>
      <form onSubmit={submit} className="space-y-4">
        <label className="block text-sm text-gray-300">
          Email
          <input required autoComplete="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} className="mt-2 min-h-11 w-full rounded-md border border-gray-700 bg-black px-3 text-white outline-none focus:border-violet-500" />
        </label>
        <label className="block text-sm text-gray-300">
          Password
          <input required minLength={8} autoComplete={mode === "signin" ? "current-password" : "new-password"} type="password" value={password} onChange={(event) => setPassword(event.target.value)} className="mt-2 min-h-11 w-full rounded-md border border-gray-700 bg-black px-3 text-white outline-none focus:border-violet-500" />
        </label>
        <button disabled={busy} type="submit" className="min-h-11 w-full rounded-md bg-violet-600 px-4 font-semibold text-white hover:bg-violet-500 disabled:opacity-60">
          {busy ? "Please wait..." : mode === "signin" ? "Sign in" : "Create account"}
        </button>
        {message && <p role="status" className="text-sm text-gray-300">{message}</p>}
      </form>
    </section>
  );
};

export default AuthPanel;