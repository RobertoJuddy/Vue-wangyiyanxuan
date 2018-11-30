import Mock from 'mockjs'
import HomeData from './datahome.json'

Mock.mock('/homedata', {
  code: 0,
  data: HomeData
})
