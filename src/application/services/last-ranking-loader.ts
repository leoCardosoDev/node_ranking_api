import { RankingScore } from '@/domain/entities'
import { LastRankingLoader } from '@/domain/usecases'
import { LoadLastRankingRepository } from '@/application/contracts'

export class LastRankingLoaderService implements LastRankingLoader {
  constructor(private readonly _loadLastRankingRepository: LoadLastRankingRepository) {}

  async load(): Promise<RankingScore[]> {
    if (new Date().getHours() > 21) {
      throw new Error()
    }
    return await this._loadLastRankingRepository.loadLastRanking()
  }
}
