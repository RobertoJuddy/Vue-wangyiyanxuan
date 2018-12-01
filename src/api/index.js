import ajax from './ajax'

export const reqGetHomeData = () => ajax('/homedata')

export const reqDataTopic = () => ajax('/datatopic')

export const reqGetDataNav = () => ajax('/datanav')
