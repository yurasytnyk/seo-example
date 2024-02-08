interface Props<T> {
  json: T;
}

export function JsonLd<T>({ json }: Props<T>) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />
  );
}
