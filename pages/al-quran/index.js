import Head from "next/head";
import useSWR from "swr";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";
import { Loading } from "@nextui-org/react";
import Layout from "../../components/layout";
export default function Home() {
  const route = useRouter();

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "https://equran.id/api/surat",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading)
    return (
      <div className={styles.main}>
        <Loading color={"currentColor"} />;
      </div>
    );

  return (
    <Layout>
      <Head>
        <title>{`Al-qu'ran Indonesia`}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="m-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
        {data.map((e, i) => (
          <div
            onClick={() => {
              route.push(`/al-quran/${e.nomor}`);
            }}
            key={i}
            className="bg-red-900 px-2 rounded-md py-4 text-center hover:cursor-pointer hover:scale-110 duration-500 hover:border"
          >
            <h1> {e.nama}</h1>
            <h1>
              {e.nomor}. {e.nama_latin} {`(${e.jumlah_ayat})`}
            </h1>
            <h1 className="text-xs italic">{e.tempat_turun}</h1>
          </div>
        ))}
      </div>
    </Layout>
  );
}
