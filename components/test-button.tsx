import { memo, useEffect, useState } from 'react';
import Button from './button';

type TState = 'idle' | 'loading' | 'success' | 'error';

const TestButton = () => {
  const [requestStep, setRequestStep] = useState<TState>('idle');
  let successText;
  let errorText;

  console.log(requestStep);

  useEffect(() => {
    if (requestStep === 'success') {
      successText = 'Enregistrement reussi';
    } else if (requestStep === 'error') {
      errorText = 'Enregistrement echoue';
    } else {
      successText = undefined;
      errorText = undefined;
    }
  }, [requestStep]);

  const onClick = () => {
    setRequestStep('loading');
    setTimeout(() => {
      setRequestStep('success');
      setTimeout(() => {
        setRequestStep('idle');
      }, 2000);
    }, 3000);
  };

  return (
    <Button
      loading={requestStep === 'loading'}
      success={requestStep === 'success'}
      error={requestStep === 'error'}
      onClick={onClick}
    >
      Make a search
    </Button>
  );
};

export default memo(TestButton);
