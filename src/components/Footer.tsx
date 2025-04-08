// src/components/Footer.tsx
export default function Footer() {
    return (
      <footer className="w-full border-t text-center py-4 text-sm text-gray-500 bg-gray-50">
        © {new Date().getFullYear()} DreamHome. All rights reserved.
      </footer>
    );
  }  