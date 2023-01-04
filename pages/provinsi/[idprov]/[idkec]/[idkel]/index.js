import { Loading } from "@nextui-org/react";
import Head from "next/head";
import { useRouter } from "next/router";
import useSWR from "swr";
import styles from "../../../../../styles/Home.module.css";

export default function Home() {
  const route = useRouter();
  const { idkel } = route.query;
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    `https://www.emsifa.com/api-wilayah-indonesia/api/villages/${idkel}.json`,
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading)
    return (
      <div className={styles.main}>
        <Loading color={"currentColor"} />
      </div>
    );

  return (
    <>
      <Head>
        <title>
          {data.nama_latin} | {`Al-qu'ran Indonesia`}
        </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 sm:grid-cols-2 m-10 gap-4">
        {data.map((e, i) => (
          <div
            className="hover:cursor-pointer bg-red-900 rounded-lg py-2 px-4"
            key={i}
          >
            <h1>{e.name}</h1>
          </div>
        ))}
      </div>
    </>
  );
}
