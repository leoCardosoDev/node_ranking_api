import { RankingScoreModel } from '@/application/models'

export interface LoadLastRankingRepository {
  loadLastRanking: () => Promise<RankingScoreModel[]>
}
