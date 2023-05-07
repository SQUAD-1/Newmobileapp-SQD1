import styled from 'styled-components';
import { type ILegendProps } from '.';

export const Input = styled.input`
  width: 100%;
  height: 100%;
  outline: 0;
  border: none;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  align-items: center;
  letter-spacing: 0.5px;
  padding-right: 1.6rem;
  background: transparent;

  color: #2b4417;
`;
export const Fildset = styled.fieldset<ILegendProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px;
  width: ${(props) => props.widht ?? '366px'};
  height: ${(props) => props.height ?? '55px'};
  border-radius: 4px;
  border: 2px solid green;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  padding-left: 10px;
  background: transparent;
`;

export const Legend = styled.legend`
  padding: 0px 4px 0px 4px;
`;

export const LegendText = styled.span`
  font-family: 'roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.4px;
  color: #2b4417;
  flex: none;
  order: 0;
  flex-grow: 0;
`;
