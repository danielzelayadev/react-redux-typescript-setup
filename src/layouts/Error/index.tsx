import * as React from 'react';
import CenterBox from '../../components/CenterBox';

export interface IProps {
  message: string;
}

class ErrorLayout extends React.Component<IProps> {
  public render() {
    const { message } = this.props;
    return (
      <CenterBox background="red">
        <h1>{message}</h1>
      </CenterBox>
    );
  }
}

export default ErrorLayout;
