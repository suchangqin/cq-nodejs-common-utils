import { expect } from 'chai'
import { msleep, sleep } from './sleep'
describe('sleep', () => {
    it('sleep', async () => {
        let start = new Date().getTime()
        await sleep(1)
        let end = new Date().getTime()
        expect(end-start).be.greaterThan(1000)
    })
    it('usleep', async () => {
        let start = new Date().getTime()
        await msleep(1000)
        let end = new Date().getTime()
        expect(end-start).be.greaterThan(1000)
    })
})
