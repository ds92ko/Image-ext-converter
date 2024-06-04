'use client';

import Lottie from 'react-lottie-player';

const LottiePlayer = ({ animationData }: { animationData: { ['default']: object } | object }) => {
  return (
    <Lottie
      loop
      animationData={animationData}
      play
    />
  );
};

export default LottiePlayer;
