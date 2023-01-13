import client from '../prismic';

export default function PageA() {
  return (
    <main>
      PageA
    </main>
  );
}

export const getStaticProps = async () => {
  const data = await client.getByType('document-type');
  console.log('Page A Data', data.results[0]);
  return {
    props: {
    },
  };
};
