/* eslint-disable @next/next/no-img-element */
import React from "react";
import Layout from "../../components/layout";
import useSWR from "swr";
import { Loading } from "@nextui-org/react";
import styles from "../../styles/Home.module.css";
import dayjs from "dayjs";
export default function Index() {
  const dayjs = require("dayjs");
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "https://newsapi.org/v2/top-headlines?country=id&category=technology&apiKey=d97baa93acfa4280a8cf896819227915",
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
      <div className={`${styles.main} grid grid-cols-1 -mt-20`}>
        {data.articles.map((e, i) => {
          console.log(i);
          return (
            <div
              key={i}
              className="flex mt-4 gap-4 p-5 border-2 rounded-xl hover:shadow-2xl hover:scale-110 duration-500 hover:cursor-auto"
            >
              <div className="w-96 flex flex-col justify-between">
                <h1 className="font-bold">
                  <a href={e.url} target={"_blank"} rel="noreferrer">
                    {e.title}
                  </a>
                </h1>
                <h1 className="w-96 text-justify">
                  {`${e.content} ?? "-"`.slice(0, 200)}
                </h1>
                <h1 className="w-96 text-justify">
                  {dayjs(e.publishedAt).format("MMM D, YYYY HH:mm", "id")}
                </h1>
              </div>
              <div className="w-[400px] aspect-video bg-red-300 overflow-clip rounded-xl">
                <img
                  className="bg-cover w-full h-full hover:scale-110 duration-500"
                  src={
                    e.urlToImage ??
                    "https://images.unsplash.com/photo-1671726805766-de50e4327182?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  }
                  alt="#"
                />
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}
