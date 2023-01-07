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
    none: ["#D9D9D9", true, "none"],
    waitingCustomer: ["#DB00FF", false, "waiting-customer"],
    waitingApproval: ['#E18700', false, "waiting-approval"],
    waitingExternals: ['#7F6098', false, 'waiting-externals'],
    qaInternal: ['#1400FF', false, 'qa-internal'],
    qaCustomer: ['#ffc0cb', true, 'qa-external'],
    working: ["#E3CD00", true, "working"],
    paused: ['#FF0000', true, 'paused'],
    deploy: ['#68CDE3', true, 'deploy'],
    done: ["#88DF86", true, "done"],
  }

  return statusColor[status] ? statusColor[status] : ['gray', false, 'other']

}