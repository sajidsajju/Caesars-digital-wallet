import React from 'react';
import {
  Navimg,
  Icontext,
  Row,
  Content,
  NavimgLink,
  Navaddmoney,
} from './style';
import {
  EARN,
  TRANSFER,
  REDEEM,
  BENEFITS,
} from '../../../config/configHandler';
const Rows = [
  {
    url: '/earn',
    icon: 'fal fa-hands-usd',
    name: EARN,
  },
  {
    url: '/transfer',
    icon: 'fal fa-sync-alt',
    name: TRANSFER,
  },
  {
    url: '/redeem',
    icon: 'fal fa-gift',
    name: REDEEM,
  },
  {
    url: '/benefits',
    icon: 'fal fa-star',
    name: BENEFITS,
  },
];
/* ---Reward card toolbar to display 4 icons below rewardcard--- */
const RewardCardToolbar = () => {
  return (
    <div>
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

export default RewardCardToolbar;
