/* eslint-disable import/no-anonymous-default-export */
export const fetcher = (url: string) => fetch(url).then((res) => res.json());
