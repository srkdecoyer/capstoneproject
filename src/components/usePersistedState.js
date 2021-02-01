import React, {useEffect} from 'react';

export function usePersistedState(key, defaultValue) {
  if (typeof window === "undefined" ){
    const [state, setState] = React.useState(defaultValue);
    return [state, setState];
  }
  else{
    const [state, setState] = React.useState(
      () => JSON.parse(localStorage.getItem(key)) || defaultValue
    );
    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);
    return [state, setState];
  }
}
    