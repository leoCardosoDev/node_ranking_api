import { adaptResolver } from '@/main/adapter'
import { makeLoadLastRankingController } from '@/main/factories'

export default {
  Query: {
    lastRanking: async (): Promise<any> => adaptResolver(makeLoadLastRankingController())
  }
}
