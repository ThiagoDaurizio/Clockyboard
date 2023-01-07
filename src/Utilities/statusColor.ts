export type StatusColor = {
  none: [string, boolean, string]
  waitingCustomer: [string, boolean, string]
  waitingApproval: [string, boolean, string]
  waitingExternals: [string, boolean, string]
  qaInternal: [string, boolean, string]
  qaCustomer: [string, boolean, string]
  working: [string, boolean, string]
  paused: [string, boolean, string]
  deploy: [string, boolean, string]
  done: [string, boolean, string]
}

export const getStatusColor = (status: string) => {
  const statusColor: any = {
    none: ["#D9D9D9", 'black', "none"],
    waitingCustomer: ["#DB00FF", 'white', "waiting-customer"],
    waitingApproval: ['#E18700', 'white', "waiting-approval"],
    waitingExternals: ['#7F6098', 'white', 'waiting-externals'],
    qaInternal: ['#1400FF', 'black', 'qa-internal'],
    qaCustomer: ['#ffc0cb', 'black', 'qa-external'],
    working: ["#E3CD00", 'black', "working"],
    deploy: ['#68CDE3', 'black', 'deploy'],
    done: ["#88DF86", 'black', "done"],
    paused: ['#FF0000', 'white', 'paused'],
    prsended: ["#ae4b4b", 'white', 'pr-sended'],
    other: ['#565656', 'white', 'other']
  }

  return statusColor[status] ? statusColor[status] : ['gray', false, 'other']

}