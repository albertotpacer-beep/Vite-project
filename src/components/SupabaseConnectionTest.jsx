import { useState } from "react";
import { fetchEvents } from "../services/events";

export default function SupabaseConnectionTest() {
  const [result, setResult] = useState("Not tested");

  async function testConnection() {
    setResult("Checking Supabase and events table...");
    try {
      const events = await fetchEvents();
      setResult(`Connected. The events table is readable (${events.length} events).`);
    } catch (error) {
      setResult(`Connection failed: ${error.message}`);
    }
  }

  return (
    <section className="min-h-screen bg-black px-6 py-12 text-white">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-bold">Supabase connection test</h1>
        <p className="mt-3 text-gray-400">
          This checks the configured credentials and reads the events table.
        </p>
        <button
          type="button"
          onClick={testConnection}
          className="mt-6 rounded-md bg-violet-600 px-5 py-3 font-semibold hover:bg-violet-500"
        >
          Test Supabase
        </button>
        <p role="status" className="mt-4 text-sm text-gray-300">
          {result}
        </p>
      </div>
    </section>
  );
}
