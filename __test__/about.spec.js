const { openBrowser, goto, screenshot, closeBrowser } = require('taiko');

const host = "https://google.com"

describe('google', () => {

  beforeAll(async () => {
    await openBrowser({ headless: false })
  })

  afterAll(async () => {
    await closeBrowser()
  })

  it('screenshot', async () => {
    await goto(host)
    const screen =
      await screenshot({ fullPage: true, encoding: 'base64' })

    expect(screen).toMatchImageSnapshot()
  })
})