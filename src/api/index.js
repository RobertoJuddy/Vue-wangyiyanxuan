import ajax from './ajax'

export const reqGetHomeData = () => ajax('/homedata')

export const reqDataTopic = () => ajax('/datatopic')

export const reqGetDataNav = () => ajax('/datanav')

export const reqSendCode = (phone) => ajax('/api/sendcode' , {phone})

export const reqLoginSms = ({phone, code}) => ajax('api/login_sms', {phone, code} ,'POST')




