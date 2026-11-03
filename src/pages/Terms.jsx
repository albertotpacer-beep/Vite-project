const Terms = () => (
  <main className="min-h-[65vh] bg-black px-4 py-10 text-white sm:px-8 sm:py-14">
    <article className="mx-auto max-w-3xl">
      <p className="text-sm font-semibold uppercase text-violet-300">Evently information</p>
      <h1 className="mt-2 text-3xl font-bold sm:text-5xl">Terms of use</h1>
      <p className="mt-4 text-sm text-gray-500">Draft terms; have these reviewed and customized before operating a public event service.</p>
      <div className="mt-8 space-y-8 border-t border-gray-800 pt-8 text-sm leading-7 text-gray-300 sm:text-base">
        <section>
          <h2 className="text-lg font-semibold text-white">Event information</h2>
          <p className="mt-2">Event details are provided for discovery and may change. Confirm timing, venue, availability, and other details with the event organizer before making plans.</p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-white">Accounts and saved events</h2>
          <p className="mt-2">Keep your sign-in credentials private. Saved events are associated with your account and can be removed from your Favourites page. Do not use the service to interfere with other users or the service itself.</p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-white">Tickets and availability</h2>
          <p className="mt-2">Evently currently displays listings only. Ticket purchasing and booking are not implemented on this site; no ticket purchase is completed by using its event pages.</p>
        </section>
      </div>
    </article>
  </main>
);

export default Terms;
