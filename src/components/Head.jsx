export default function Head({ title, sub, as: H = 'h2' }) {
  return <div className="head" data-reveal><H>{title}</H><i className="h-line" />{sub && <p>{sub}</p>}</div>;
}
