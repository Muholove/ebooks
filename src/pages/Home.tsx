import { ebooks } from '../data/ebooks';
import { EbookCard } from '../components/EbookCard';

export default function Home() {
  return (
    <div className="container">
      <h1 className="page-title">Come to buy your content</h1>
      <div className="grid">
        {ebooks.map(e => (
          <EbookCard key={e.id} ebook={e} />
        ))}
      </div>
    </div>
  );
}


