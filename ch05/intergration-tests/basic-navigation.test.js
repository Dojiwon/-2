import { TestWatcher } from '@jest/core'
import { getPortPromise } from 'portfinder'
import { launch } from 'puppeteer'
import { listen } from '../meadowlark.js'
let server = null
let port = null
beforeEach(async () => {
    port = await getPortPromise()
    server = listen(port)
})
afterEach(() => {
    server.close()
})

test('home page links to about page', async () => {
    const browser = await launch()
    const page = await browser.newPage()
    await page.goto(`http://localhost:${port}`)
    await Promise.all([
        page.waitForNavigation(),
        page.click('[data-test-id="about"]')
    ])
    expect(page.url()).toBe(`http://localhost:${port}/about`)
    await browser.close()
})