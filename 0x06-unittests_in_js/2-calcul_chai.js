const calculateNumber = (type, a, b) => {
  const a_round = Math.round(a);
  
  const b_round = Math.round(b);

  if (type === 'SUBTRACT') {
    return a_round - b_round;
  }

  if (type === 'DIVIDE') {
    if (b_round === 0) {
      return 'Error';
    }
    return a_round / b_round;
  }

  return a_round + b_round;
};

module.exports = calculateNumber;
