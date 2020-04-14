import { useState, useEffect } from "react";

export default function useStats(url) {
  const [stats, setStats] = useState();

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(url).then(
        res => res.json(),
        reason => console.log(reason)
      );

      setStats(data);
    }

    fetchData();
  }, [url]);

  return stats;
}
