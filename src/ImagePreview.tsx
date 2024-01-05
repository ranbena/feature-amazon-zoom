import React from 'react';
import { MARKER_HEIGHT, MARKER_WIDTH } from './config';

interface IProps {
  src: string;
  isLoading: boolean;
  onPositionChanged: (pos: [number, number] | null) => void;
}

const ImagePreview: React.FC<IProps> = ({
  onPositionChanged,
  src,
  isLoading,
}) => {
  const [isReady, setReady] = React.useState(false);
  const ref = React.useRef<HTMLDivElement | null>(null);
  const elBounds = React.useRef<DOMRect | null>(null);
  const [posStyle, setPosStyle] = React.useState<{
    left: number;
    top: number;
  } | null>(null);

  React.useEffect(() => {
    const value =
      posStyle && elBounds.current
        ? ([
            posStyle.left / (elBounds.current.width - MARKER_WIDTH),
            posStyle.top / (elBounds.current.height - MARKER_HEIGHT),
          ] as [number, number])
        : null;
    onPositionChanged(value);
  }, [posStyle, onPositionChanged]);

  const onMouseEnter = (event: React.MouseEvent) => {
    elBounds.current = ref.current?.getBoundingClientRect() || null;
    onMouseMove(event);
  };

  const onMouseLeave = () => {
    setPosStyle(null);
  };

  const onMouseMove = (event: React.MouseEvent) => {
    if (!isReady || !elBounds.current) return;

    // center
    const clientX = event.clientX - MARKER_WIDTH / 2;
    const clientY = event.clientY - MARKER_HEIGHT / 2;

    // left
    let left = 0;
    if (clientX + MARKER_WIDTH > elBounds.current.right) {
      left = elBounds.current.width - MARKER_WIDTH;
    } else if (clientX > elBounds.current.left) {
      left = clientX - elBounds.current.left;
    }

    // top
    let top = 0;
    if (clientY + MARKER_HEIGHT > elBounds.current.bottom) {
      top = elBounds.current.height - MARKER_HEIGHT;
    } else if (clientY > elBounds.current.top) {
      top = clientY - elBounds.current.top;
    }

    setPosStyle({ left, top });
  };

  return (
    <div
      ref={ref}
      className="preview"
      style={{ cursor: isLoading ? 'wait' : undefined }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseMove={onMouseMove}
    >
      {posStyle && !isLoading ? (
        <div
          className="marker"
          style={{
            ...posStyle,
            width: `${MARKER_WIDTH}px`,
            height: `${MARKER_HEIGHT}px`,
          }}
        />
      ) : null}
      <img alt="" src={src} onLoad={() => setReady(true)} />
    </div>
  );
};

export default ImagePreview;
