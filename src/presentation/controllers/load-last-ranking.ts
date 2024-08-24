import { LastRankingLoader } from '@/domain/usecases'
import { Controller, HttpResponse, ok, serverError } from '@/presentation/contracts'
import { RankingScoreViewModel } from '../view-models'

export class LoadLastRankingController implements Controller {
  constructor(private readonly _lastRankingLoader: LastRankingLoader) {}
  async handle(): Promise<HttpResponse<RankingScoreViewModel[] | Error>> {
    try {
      const ranking = await this._lastRankingLoader.load()
      return ok(
        ranking.map(item => ({
          ...item,
          matchDate: item.matchDate.toISOString()
        }))
      )
    } catch (error) {
      return serverError(error as Error)
    }
  }
}
