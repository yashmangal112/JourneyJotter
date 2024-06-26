function footer() {
  const newDate = new Date();
  const year = newDate.getFullYear();

  return (
    <footer className="flex min-h-[6vh] flex-col items-center bg-zinc-900 py-2 text-center text-white sm:flex-row sm:justify-between sm:py-3">
      <section className="text-base sm:pl-4 sm:pl-8 lg:pl-16">Journey Jotter</section>
      <section className="text-base sm:pl-4 sm:pl-8 lg:pl-16">Developed with 🤍 by Yash Mangal</section>
      <section className="text-base sm:pr-16 sm:pr-4 lg:pr-24">
        <span className="mr-2">&copy;</span>
        {year} All Rights Reserved
      </section>
    </footer>
  );
}

export default footer;
