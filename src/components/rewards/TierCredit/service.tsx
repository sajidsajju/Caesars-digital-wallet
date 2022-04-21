export const TierCards = (credits: number) => {
  let tierCard = { creditsCard: '', name: '' };
  switch (true) {
    case credits >= 0 && credits < 5000:
      tierCard = { creditsCard: 'Rewards-Gold', name: 'GOLD' };
      break;
    case credits >= 5000 && credits < 15000:
      tierCard = { creditsCard: 'Rewards-Platnium', name: 'Platinum' };
      break;
    case credits >= 15000 && credits < 150000:
      tierCard = { creditsCard: 'Rewards-Diamond', name: 'DIAMOND' };
      break;
    case credits >= 150000:
      tierCard = { creditsCard: 'Rewards-SevenStars', name: 'SEVENSTARS' };
      break;
    default:
      break;
  }
  return tierCard;
};
