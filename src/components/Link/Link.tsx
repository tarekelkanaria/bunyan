export default function Link({ text, href }: { text: string; href: string }) {
  return <a href={href}>{text}</a>;
}
