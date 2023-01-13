import client from '../prismic';

export default function PageB() {
  return (
    <main>
      PageB
    </main>
  );
}

export const getStaticProps = async () => {
  const data = await client.getByType('document-type');
  console.log('Page B Data', data.results[0]);
  return {
    props: {
    },
  };
};
