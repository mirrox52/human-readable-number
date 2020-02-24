module.exports = function toReadable (number) {
  let humanReadableNumber = '';
  let ones = number % 10;
  let tens = Math.floor((number % 100) / 10);
  let hundreds = Math.floor(number / 100);

  const arrWithLowNumber = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const arrWithTens =      ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']; 
  const arrWithHighNumber = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']; // + 2, because of zeroen and ten

  if (hundreds != 0) //for hundreds
  {
    humanReadableNumber += arrWithLowNumber[hundreds] + ' ' + 'hundred ';
  }
  if (tens != 0) // for tens
  {
      if (tens === 1)
      {
        if ((ones != 0) || (ones === 0 && tens === 1))
        {
            return(humanReadableNumber += arrWithTens[ones]);
        }
      }
      else
      {
        humanReadableNumber += arrWithHighNumber[tens - 2] + ' ';
      }
  }
  if (ones != 0)
  {
    return(humanReadableNumber += arrWithLowNumber[ones]).trim();
  }
  if ((ones === 0) && (tens === 0) && (hundreds === 0))
  {
      return arrWithLowNumber[0];
  }
  return(humanReadableNumber).trim();
}