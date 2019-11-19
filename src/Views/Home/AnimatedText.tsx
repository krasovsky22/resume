import uuid from 'uuid';
import React from 'react';
import classNames from 'classnames';
import Hoverable from '@/Components/Hoverable';

type AnimatedTextProps = {
  text: string;
};

const AnimatedText: React.FC<AnimatedTextProps> = ({ text }) => {
  const words = text.split(' ');

  const hoverableWords = words.map(word => {
    const characters = word.split('');

    const wordElement = characters.map(character => (
      <Hoverable key={uuid.v4()}>
        {isHovered => (
          <span
            className={classNames('inline-block', {
              'is-hovered': isHovered
            })}
          >
            {character}
          </span>
        )}
      </Hoverable>
    ));

    const spaceElement = <span key={uuid.v4()}>&nbsp;</span>;

    //add space between words
    wordElement.push(spaceElement);
    return wordElement;
  });

  return <div className="d-inline-flex">{hoverableWords}</div>;
};

export default AnimatedText;
