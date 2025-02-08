import { directContact, socials } from "../../constans/contacts";

export default function Contacts() {
  return (
    <div className="space-y-16 py-16">
      <div className="space-y-4">
        <h1 className="text-3xl font-medium">Contacts</h1>
        <p>Get in touch with me through my social media or direct email.</p>
      </div>
      <table className="w-full max-w-xl table-fixed rounded-md border border-zinc-300">
        <caption className="mb-2 text-xs font-medium text-gray-500">
          Direct contact
        </caption>
        <thead>
          <tr className="*:p-2 *:text-sm *:font-medium divide-x divide-zinc-300 border-b border-zinc-300">
            <td>Name</td>
            <td>URL</td>
          </tr>
        </thead>
        <tbody>
          {directContact.map((contact) => (
            <tr key={contact.name} className="*:p-2 *:text-sm *:text-gray-700 divide-x divide-zinc-300 border-b border-zinc-300">
              <td>{contact.name}</td>
              <td className="overflow-x-auto">
                <a
                  href={`mailto:${contact.url}`}
                  className="text-blue-600 transition-colors hover:text-blue-500"
                >
                  {contact.url}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <table className="w-full max-w-xl table-fixed rounded-md border border-zinc-300">
        <caption className="mb-2 text-xs font-medium text-gray-500">
          Social Media
        </caption>
        <thead>
          <tr className="*:p-2 *:text-sm *:font-medium divide-x divide-zinc-300 border-b border-zinc-300">
            <td>Name</td>
            <td>URL</td>
          </tr>
        </thead>
        <tbody>
          {socials.map((social) => (
            <tr key={social.name} className="*:p-2 *:text-sm *:text-gray-700 divide-x divide-zinc-300 border-b border-zinc-300">
              <td>{social.name}</td>
              <td className="overflow-x-auto">
                <a
                  href={social.url}
                  target="_blank"
                  className="text-blue-600 transition-colors hover:text-blue-500"
                >
                  {social.url}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
