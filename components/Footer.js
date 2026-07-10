export default function Footer({ content }) {
  const currentYear = new Date().getFullYear();
  const copyrightText = content.footer.copyright.replace('{year}', currentYear.toString());

  return (
    <footer className="border-t border-gray-900 bg-[#0B0F14] py-8">
      <div className="mx-auto max-w-7xl px-4 text-center text-sm text-gray-500 md:px-8">
        <p>{copyrightText}</p>
      </div>
    </footer>
  );
}
