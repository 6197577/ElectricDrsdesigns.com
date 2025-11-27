import React from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link';

export default function BlogIndex() {
  // This would eventually come from a CMS or markdown files
  const posts = [
    { title: "Why Your Lights Keep Flickering", excerpt: "It might be a loose neutral or an overloaded circuit. Here is how to tell.", date: "Oct 2, 2025" },
    { title: "Generac vs. Kohler: Choosing a Generator", excerpt: "We break down the pros and cons of the top standby generator brands.", date: "Sept 28, 2025" },
    { title: "Preparing Your Home for Hurricane Season", excerpt: "Essential electrical safety tips for our Gainesville and Charleston clients.", date: "Sept 15, 2025" }
  ];

  return (
    <Layout title="Electrical Tips Blog | Electric DRs Designs">
      <div className="container">
        <h1 style={{textAlign: 'center'}}>The Electric Doctor's Blog</h1>
        <p style={{textAlign: 'center', margin: '0 auto 50px'}}>News, tips, and safety advice from your local experts.</p>

        <div className="grid" style={{maxWidth: '800px', margin: '0 auto'}}>
            {posts.map((post, i) => (
                <div key={i} style={{backgroundColor: 'var(--card-bg)', padding: '30px', borderRadius: '8px', borderBottom: '4px solid var(--primary-orange)'}}>
                    <h3 style={{color: 'var(--text-light)'}}>{post.title}</h3>
                    <p style={{color: 'var(--text-gray)'}}>{post.date}</p>
                    <p>{post.excerpt}</p>
                    <Link href="#" style={{fontWeight: 'bold'}}>Read More &rarr;</Link>
                </div>
            ))}
        </div>
      </div>
    </Layout>
  );
}
