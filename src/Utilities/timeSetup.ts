

export const turnMinutesInHour = (time: number) => {

  if(isNaN(time)){
    return "0:00"
  }

  if(!isNaN(time)){
    const formatedHours = Math.floor(time / 60)
    const formatedMinutes = time % 60

    let finalResult = formatedHours + ":" + formatedMinutes

    const verifyEnd = finalResult.split(':')

    if(verifyEnd[1].length === 1){
      return finalResult = finalResult + '0'
    }

    return finalResult
  }
}


export const findActualTime = (TimeAdd: number[], TimeDiscount: number[]) => {

  const totalAdded = TimeAdd.reduce((acc: number, cur: number) => {
    return acc + cur
  }, 0)

  const totalDiscounted = TimeDiscount.reduce((acc: number, cur: number) => {
    return acc + cur
  }, 0)

  let finalResult = totalAdded - totalDiscounted

  return turnMinutesInHour(finalResult)
}