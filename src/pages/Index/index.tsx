import * as React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CenterBox from '../../components/CenterBox';
import { actions, getClicks } from '../../store/ui';

export interface IProps {
  appClicks: number;
  addClick: () => any;
}

export class UI extends React.Component<IProps> {
  public componentDidMount() {
    window.addEventListener('click', this.clickHandler);
  }
  public componentWillUnmount() {
    window.removeEventListener('click', this.clickHandler);
  }
  public render() {
    const { appClicks } = this.props;
    return (
      <CenterBox>
        <h1>Welcome to Rapture</h1>
        <p>Number of Clicks is {appClicks}</p>
      </CenterBox>
    );
  }
  private clickHandler = () => {
    this.props.addClick();
  };
}

export const mapStateToProps = createStructuredSelector({
  appClicks: getClicks
});

export const mapDispatchToProps = { addClick: actions.addClick };

export default connect(mapStateToProps, mapDispatchToProps)(UI);
