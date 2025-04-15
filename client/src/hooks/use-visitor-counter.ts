import { useEffect, useState } from 'react';
import { apiRequest } from "@/lib/queryClient";

export function useVisitorCounter() {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        setLoading(true);
        
        // Increment the visitor count and get the updated count
        const incrementResponse = await apiRequest("POST", "/api/visitors/increment");
        const incrementData = await incrementResponse.json();
        
        if (incrementData && typeof incrementData === 'object' && 'count' in incrementData) {
          setVisitorCount(incrementData.count);
        } else {
          // Fallback to GET if the POST response doesn't include the count
          const countResponse = await apiRequest("GET", "/api/visitors/count");
          const countData = await countResponse.json();
          if (countData && typeof countData === 'object' && 'count' in countData) {
            setVisitorCount(countData.count);
          }
        }
      } catch (err) {
        console.error("Error fetching visitor count:", err);
        setError("Failed to load visitor counter");
      } finally {
        setLoading(false);
      }
    };

    fetchVisitorCount();
  }, []);

  return { visitorCount, loading, error };
}