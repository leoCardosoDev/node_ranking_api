import { LastRankingLoader } from '@/domain/usecases'
import { Controller, HttpResponse } from '@/presentation/contracts'
import { RankingScoreViewModel } from '../view-models'

export class LoadLastRankingController implements Controller {
  constructor(private readonly _lastRankingLoader: LastRankingLoader) {}
  async handle(): Promise<HttpResponse<RankingScoreViewModel[] | Error>> {
    try {
      const ranking = await this._lastRankingLoader.load()
      return {
        statusCode: 200,
        data: ranking.map(item => ({
          ...item,
          matchDate: item.matchDate.toISOString()
        }))
      }
    } catch (error) {
      return {
        statusCode: 500,
        data: error as Error
      }
    }
  }
}
