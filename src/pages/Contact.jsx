import { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  function submitContact(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const subject = encodeURIComponent(`Evently message from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} (${email})`);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <main className="min-h-[65vh] bg-black px-4 py-10 text-white sm:px-8 sm:py-14">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
        <header>
          <p className="text-sm font-semibold uppercase text-violet-300">Contact</p>
          <h1 className="mt-2 text-3xl font-bold sm:text-5xl">Let’s talk.</h1>
          <p className="mt-4 leading-7 text-gray-400">Questions about an event or the Evently experience? Send us a note and your email app will open with the message ready to send.</p>
          <p className="mt-6 text-sm text-gray-500">The form opens your email app; add Evently’s contact address before sending.</p>
        </header>

        <form onSubmit={submitContact} className="space-y-5 rounded-lg border border-gray-800 bg-[#15131B] p-5 sm:p-7">
          <label className="block text-sm text-gray-300">Name
            <input name="name" required maxLength={100} autoComplete="name" className="mt-2 min-h-11 w-full rounded-md border border-gray-700 bg-black px-3 text-white outline-none focus:border-violet-500" />
          </label>
          <label className="block text-sm text-gray-300">Email
            <input name="email" required type="email" maxLength={254} autoComplete="email" className="mt-2 min-h-11 w-full rounded-md border border-gray-700 bg-black px-3 text-white outline-none focus:border-violet-500" />
          </label>
          <label className="block text-sm text-gray-300">Message
            <textarea name="message" required minLength={10} maxLength={4000} rows={6} className="mt-2 w-full resize-y rounded-md border border-gray-700 bg-black p-3 text-white outline-none focus:border-violet-500" />
          </label>
          <button type="submit" className="min-h-11 rounded-md bg-violet-600 px-5 font-semibold hover:bg-violet-500">Prepare email</button>
          {submitted && <p role="status" className="text-sm text-gray-400">Your email app should open with the subject and message filled in. Add the recipient before sending.</p>}
        </form>
      </div>
    </main>
  );
};

export default Contact;
