import React from 'react';
import ImagePreview from './ImagePreview';
import ImageFull from './ImageFull';
import './App.css';

const App: React.FC = () => {
  const [position, setPosition] = React.useState<[number, number] | null>(null);
  const [isFullImgReady, setFullImgReady] = React.useState(false);

  return (
    <div className="root">
      <header>
        <div className="top" />
        <div className="bottom" />
      </header>
      <section>
        <div>
          <ImagePreview
            src="https://picsum.photos/id/212/680/1044"
            isLoading={isFullImgReady === false}
            onPositionChanged={setPosition}
          />
        </div>
        <div className="content">
          {position && (
            <ImageFull
              onReady={() => setFullImgReady(true)}
              src="https://picsum.photos/id/212/1360/2088"
              position={position}
            />
          )}
          <h1>Batman (2011-2016) #24 (Batman (2011-))</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div />
      </section>
    </div>
  );
};

export default App;
