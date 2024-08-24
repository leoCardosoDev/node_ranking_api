import { RankingScore } from '@/domain/entities'
import { LastRankingLoader } from '@/domain/usecases'
import { LoadLastRankingRepository } from '@/application/contracts'
import { RankingUnavailableError } from '@/domain/errors'

export class LastRankingLoaderService implements LastRankingLoader {
  constructor(private readonly _loadLastRankingRepository: LoadLastRankingRepository) {}

  async load(): Promise<RankingScore[]> {
    if (new Date().getHours() > 21) {
      throw new RankingUnavailableError()
    }
    const lastRaking = await this._loadLastRankingRepository.loadLastRanking()
    return lastRaking
  }
}
