import { useEffect, useState } from "react";
import { useFetchData } from "./use_fetch_data";
import { isError } from "../../../helpers/is_error";

/** This is the response that TypiCode gives for the /todos/ endpoint */
interface TodoResponse {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const Todo = () => {
  const url = "https://jsonplaceholder.typicode.com/todos/1";
  const [data, isFetching] = useFetchData(url);
  //console.log("fetching:" + isFetching);
  //console.log(data);
  return (
    <>
      <h2>Custom Hook</h2>

      {isFetching ? <p>Fetching...</p> : <p>{}</p>}
    </>
  );
};
