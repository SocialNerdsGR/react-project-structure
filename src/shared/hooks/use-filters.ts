import { useCallback, useState } from "react";

type Filters<T> = { [Key in keyof T]: T[Key] };

export function useFilters<T>(initialState: Filters<T>) {
  const [filters, setFilters] = useState<T>(initialState);

  const updateFilters = useCallback((state: Partial<T>) => {
    // sync with query params
    setFilters((currentFilters) => ({ ...currentFilters, ...state }));
  }, []);

  const resetFilters = useCallback(() => {
    // clear query params
    setFilters(initialState);
  }, [initialState]);

  return { filters, updateFilters, resetFilters };
}
