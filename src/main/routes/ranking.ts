import { adaptRoute } from '@/main/adapter'
import { makeLoadLastRankingController } from '@/main/factories'

import { Router } from 'express'

export default (router: Router): void => {
  router.get('/rankings/last', adaptRoute(makeLoadLastRankingController()))
}
