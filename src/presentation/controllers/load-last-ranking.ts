import { LastRankingLoader } from '@/domain/usecases'
import { Controller } from '@/presentation/contracts'

export class LoadLastRankingController implements Controller {
  constructor(private readonly _lastRankingLoader: LastRankingLoader) {}
  async handle(): Promise<any> {
    await this._lastRankingLoader.load()
    return new Promise(resolve => resolve([]))
  }
}
