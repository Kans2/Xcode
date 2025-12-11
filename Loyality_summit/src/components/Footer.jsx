export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-8 mt-10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="font-semibold text-lg">CX & Loyalty Summit MENA 2023</p>
        <p className="text-sm mt-2">Dubai, UAE • 1st - 2nd November 2023</p>

        <p className="mt-4 text-sm opacity-90">
          © {new Date().getFullYear()} CX Summit. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
