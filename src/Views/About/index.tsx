import React from 'react';
import { RouteComponentProps } from 'react-router';

export default function About(props: RouteComponentProps): React.ReactElement {
  console.log('asdas', props);
  return <div>About Page</div>;
}
