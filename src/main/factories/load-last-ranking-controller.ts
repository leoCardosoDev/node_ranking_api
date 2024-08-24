import { LastRankingLoaderService } from '@/application/services'
import { FakeRankingRepository } from '@/infra/repositories'
import { Controller } from '@/presentation/contracts'
import { LoadLastRankingController } from '@/presentation/controllers'

export const makeLoadLastRankingController = (): Controller => {
  const repository = new FakeRankingRepository()
  const loader = new LastRankingLoaderService(repository)
  return new LoadLastRankingController(loader)
}
