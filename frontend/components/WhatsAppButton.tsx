"use client";

export default function WhatsAppButton() {
  const phoneNumber = "917307290418";

  const message = encodeURIComponent(
    "Hello Datchik Electronics, I would like to know more about your products."
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Datchik Electronics on WhatsApp"
      className="fixed bottom-6 right-6 z-[9999] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-transform duration-300 hover:scale-110"
    >
      {/* WhatsApp SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="h-8 w-8 fill-current"
      >
        <path d="M19.11 17.23c-.28-.14-1.65-.81-1.9-.9-.26-.1-.45-.14-.64.14-.19.28-.73.9-.9 1.08-.17.19-.33.21-.61.07-.28-.14-1.18-.43-2.25-1.38-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.33.42-.49.14-.17.19-.28.28-.47.09-.19.05-.35-.02-.49-.07-.14-.64-1.54-.87-2.11-.23-.56-.47-.49-.64-.5h-.54c-.19 0-.49.07-.75.35-.26.28-.99.97-.99 2.37s1.01 2.75 1.15 2.94c.14.19 1.98 3.02 4.8 4.23.67.29 1.2.46 1.61.59.68.22 1.3.19 1.79.12.55-.08 1.65-.67 1.88-1.31.23-.64.23-1.19.16-1.31-.07-.12-.26-.19-.54-.33z" />
        <path d="M16.01 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.59 4.39 1.62 6.24L3.1 28.8l6.73-1.7a12.75 12.75 0 0 0 6.18 1.58h.01c7.06 0 12.8-5.74 12.8-12.8S23.07 3.2 16.01 3.2zm0 23.27h-.01c-2.02 0-4-.54-5.73-1.57l-.41-.24-3.99 1.01 1.07-3.89-.27-.4a10.63 10.63 0 0 1-1.63-5.66c0-5.88 4.79-10.67 10.68-10.67 2.85 0 5.53 1.11 7.55 3.13a10.62 10.62 0 0 1 3.12 7.55c0 5.88-4.79 10.67-10.68 10.67z" />
      </svg>
    </a>
  );
}