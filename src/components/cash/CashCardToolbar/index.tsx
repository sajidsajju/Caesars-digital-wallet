import React from 'react';

import {
  Ceheading,
  Navimg,
  Icontext,
  Content,
  Row,
  Navaddmoney,
  NavimgLink,
} from './style';
import {
  CASHCARD,
  ADDMONEY,
  PAY,
  CASHOUT,
  TRANSACTIONS,
} from '../../../config/configHandler';

const Rows = [
  {
    url: '/payment',
    icon: 'fal fa-money-bill-wave',
    name: ADDMONEY,
  },
  {
    url: '/play-play',
    icon: 'fal fa-barcode-read',
    name: PAY,
  },
  {
    url: '/cash-out',
    icon: 'fal fa-donate',
    name: CASHOUT,
  },
  {
    url: '/transactions',
    icon: 'fal fa-receipt',
    name: TRANSACTIONS,
  },
];

/* ToolBar for Cash Card */
const CashCardToolbar = () => {
  return (
    <div>
      <Ceheading>{CASHCARD}</Ceheading>
      <Content>
        {Rows.map((row, index) => (
          <Row key={index}>
            <NavimgLink to={row.url}>
              <Navimg>
                <Navaddmoney className={row.icon}></Navaddmoney>
              </Navimg>
            </NavimgLink>
            <Icontext>{row.name}</Icontext>
          </Row>
        ))}
      </Content>
    </div>
  );
};

export default CashCardToolbar;
