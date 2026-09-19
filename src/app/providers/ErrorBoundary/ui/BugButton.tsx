import React, { useEffect, useState } from "react";
import { Button } from "shared/ui/Button/Button";

interface BugButtonProps {
  className?: string;
}

const BugButton = ({}: BugButtonProps) => {

  const [error, setError] = useState(false)
  const makeError = () => setError(true)

  useEffect(()=> {
    if(error) {
      throw new Error()
    }
  }, [error])

  return <Button onClick={makeError}>Вызвать ошибку</Button>;
};

export default BugButton;
