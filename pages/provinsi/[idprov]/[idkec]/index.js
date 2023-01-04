import { Loading } from "@nextui-org/react";
import Head from "next/head";
import { useRouter } from "next/router";
import useSWR from "swr";
import styles from "../../../../styles/Home.module.css";

export default function Home() {
  const route = useRouter();
  const { idkec, idprov } = route.query;

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    `https://www.emsifa.com/api-wilayah-indonesia/api/districts/${idkec}.json`,
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
      <div className={styles.main}>
        <div>
          {data.map((e, i) => (
            <div
              className="hover:cursor-pointer"
              onClick={() => {
                route.push(`${idkec}/${e.id}`);
              }}
              key={i}
            >
              <h1>
                {e.id}. {e.name}ddd
              </h1>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}