export function WhatsAppButton() {
  const phone = "917899977497";
  const msg = encodeURIComponent("Hi TheSuperCover! I'd love to know more about your products.");
  return (
    <a
      href={`https://wa.me/${phone}?text=${msg}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 h-14 w-14 rounded-full grid place-items-center shadow-glow bg-[#25D366] hover:scale-105 transition-transform"
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7 fill-white" aria-hidden="true">
        <path d="M19.05 4.91A10 10 0 0 0 4.1 18.36L3 22l3.74-1.06A10 10 0 1 0 19.05 4.91Zm-7.07 15.2a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-2.22.63.63-2.16-.2-.32a8.2 8.2 0 1 1 6.27 3.17Zm4.49-6.16c-.25-.13-1.46-.72-1.69-.8s-.39-.13-.56.12-.65.8-.79.97-.29.18-.54.06a6.74 6.74 0 0 1-2-1.24 7.4 7.4 0 0 1-1.38-1.71c-.14-.25 0-.38.11-.5s.25-.29.37-.43.17-.25.25-.42a.46.46 0 0 0 0-.43c-.06-.13-.55-1.34-.76-1.83s-.41-.42-.56-.43h-.48a.93.93 0 0 0-.67.31 2.83 2.83 0 0 0-.88 2.1 4.92 4.92 0 0 0 1 2.62 11.27 11.27 0 0 0 4.31 3.81 14.55 14.55 0 0 0 1.44.53 3.46 3.46 0 0 0 1.59.1 2.6 2.6 0 0 0 1.7-1.2 2.1 2.1 0 0 0 .15-1.2c-.06-.11-.22-.18-.47-.3Z" />
      </svg>
    </a>
  );
}
