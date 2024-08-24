import { Express, Router } from 'express'
import { readdirSync } from 'fs'
import path from 'path'

export const setupRoutes = (app: Express): void => {
  const router = Router()
  app.use('/api', router)
  readdirSync(`${__dirname}/../routes`)
    .filter(filename => filename.endsWith('.js'))
    .map(async filename => {
      ;(await import(path.resolve(__dirname, `../routes/${filename}`))).default(router)
    })
}
