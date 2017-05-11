import Axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

const mock = new MockAdapter(Axios)

mock.onGet('/getgoodslist').reply(200, require('./datas/getGoodsList.json'))
mock.onGet('/getgoodsdetail').reply(200, require('./datas/getGoodsDetail.json'))
mock.onGet('/getmyborrowdetail').reply(200, require('./datas/getMyBorrowDetail.json'))
mock.onGet('/getmyborrowlist').reply(200, require('./datas/getMyBorrowList.json'))
mock.onGet('/submitborrow').reply(200, require('./datas/submitBorrow.json'))

export default mock
