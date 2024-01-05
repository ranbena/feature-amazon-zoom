import { CSSProperties } from 'react';
import { MARKER_HEIGHT, MARKER_WIDTH, PREVIEW_WIDTH } from './config';
import React from 'react';

interface IProps {
  src: string;
  position: [number, number];
  onReady: () => void;
}

const ImageFull: React.FC<IProps> = ({ position, src, onReady }) => {
  React.useEffect(() => {
    let img: HTMLImageElement | null = new Image();
    img.addEventListener('load', onReady);
    img.src = src;

    return () => {
      img?.removeEventListener('load', onReady);
      img = null;
    };
  }, [onReady, src]);

  return (
    <div
      className="full"
      style={
        {
          backgroundImage: `url(${src})`,
          '--ratio': MARKER_WIDTH / MARKER_HEIGHT,
          '--size': PREVIEW_WIDTH / MARKER_WIDTH,
          '--x': position[0],
          '--y': position[1],
        } as CSSProperties
      }
    />
  );
};

export default ImageFull;
