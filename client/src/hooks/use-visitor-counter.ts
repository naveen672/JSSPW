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
        // Get visitor count
        const countResponse = await apiRequest("GET", "/api/visitors/count");
        const countData = await countResponse.json();
        if (countData && typeof countData === 'object' && 'count' in countData) {
          setVisitorCount(countData.count);
        }
        
        // Increment the visitor count
        await apiRequest("POST", "/api/visitors/increment");
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