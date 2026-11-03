const Privacy = () => (
  <main className="min-h-[65vh] bg-black px-4 py-10 text-white sm:px-8 sm:py-14">
    <article className="mx-auto max-w-3xl">
      <p className="text-sm font-semibold uppercase text-violet-300">Evently information</p>
      <h1 className="mt-2 text-3xl font-bold sm:text-5xl">Privacy notice</h1>
      <p className="mt-4 text-sm text-gray-500">Draft notice; the site operator should review and customize it before production use.</p>
      <div className="mt-8 space-y-8 border-t border-gray-800 pt-8 text-sm leading-7 text-gray-300 sm:text-base">
        <section>
          <h2 className="text-lg font-semibold text-white">Information used by this site</h2>
          <p className="mt-2">Event listings and categories are loaded from the Evently Supabase project. If you create an account or sign in, Supabase Auth processes your account credentials. Saved event IDs are stored in the event_favourites table and protected so authenticated users can access only their own rows.</p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-white">Contact drafts</h2>
          <p className="mt-2">The Contact page creates a draft in your own email application. The site does not submit that message to a server. You choose the recipient and whether to send it.</p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-white">Your choices</h2>
          <p className="mt-2">You can remove saved events from Favourites and sign out. Account deletion, retention periods, hosting logs, analytics, and any additional data processors should be documented by the site operator before public launch.</p>
        </section>
      </div>
    </article>
  </main>
);

export default Privacy;
