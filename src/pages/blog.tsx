import React from 'react';

import Layout from '@/components/v1/layout/Layout';
import Seo from '@/components/v1/Seo';

const BlogPage = () => {
  return (
    <Layout>
      <Seo title='Blog | Xcoda' />

      <main>
        <section>Blog</section>
      </main>
    </Layout>
  );
};

export default BlogPage;
