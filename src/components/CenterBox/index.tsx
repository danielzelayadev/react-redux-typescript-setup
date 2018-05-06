import styled from 'styled-components';
import { getPropCurried } from '../../utils/common';

export interface IProps {
  background?: string;
}

const getBackground: (props: IProps) => string = getPropCurried('background');

const CenterBox = styled.div`
  align-items: center;
  background-color: ${getBackground};
  display: flex;
  justify-content: center;
`;

CenterBox.defaultProps = {
  background: '#fff'
};

export default CenterBox;
