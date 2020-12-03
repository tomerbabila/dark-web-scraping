const addLabels = async (postTitle, postContent) => {
  
  const pornographyArr = [
    'girls',
    'boys',
    'girlz',
    'bois',
    'cute',
    'porn',
    'young',
    'pretty',
    'love',
    'child',
    'children',
    'porno',
    'p0rn',
    'petite',
  ];

  const moneyArr = [
    'money',
    'credit',
    'card',
    'c4rd',
    'cards',
    'bitcoin',
    'wallet',
    'wallets',
    'buy',
    'sale',
    'sales',
  ];

  const weaponArr = ['weapon', 'weapons', 'guns', 'gunz', 'army', 'ammo'];

  const linkArr = ['.onion', 'http://', 'https://', 'bit.ly', '.com', '.net', 'www.'];

  const checkMoney = (title, content) => {
    for (let i = 0; i < moneyArr.length; i++) {
      if (title.includes(moneyArr[i]) || content.includes(moneyArr[i])) {
        return true;
      }
    }
    return false;
  };

  const checkWeapon = (title, content) => {
    for (let i = 0; i < weaponArr.length; i++) {
      if (title.includes(weaponArr[i]) || content.includes(weaponArr[i])) {
        return true;
      }
    }
    return false;
  };

  const checkPornography = (title, content) => {
    for (let i = 0; i < pornographyArr.length; i++) {
      if (
        title.includes(pornographyArr[i]) ||
        content.includes(pornographyArr[i])
      ) {
        return true;
      }
    }
    return false;
  };

  const checkLink = (title, content) => {
    for (let i = 0; i < linkArr.length; i++) {
      if (title.includes(linkArr[i]) || content.includes(linkArr[i])) {
        return true;
      }
    }
    return false;
  };

  let labels = '';
  const title = postTitle.toLowerCase();
  const content = postContent.toLowerCase();

  if (checkLink(title, content)) {
    labels = labels + 'dark-link;';
  }

  if (checkMoney(title, content)) {
    labels = labels + 'money;';
  }

  if (checkPornography(title, content)) {
    labels = labels + 'pornography;';
  }

  if (checkWeapon(title, content)) {
    labels = labels + 'weapons;';
  }

  labels = labels.slice(0, -1);

  return labels;
};

module.exports = addLabels;
