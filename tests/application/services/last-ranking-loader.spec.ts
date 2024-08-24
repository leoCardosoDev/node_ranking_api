import { LoadLastRankingRepository } from '@/application/contracts'
import { RankingScoreModel } from '@/application/models'
import { LastRankingLoaderService } from '@/application/services'

const mockRankingScore1 = {
  player: {
    name: 'any_player_name',
    country: 'any_player_country'
  },
  score: 1,
  matchDate: new Date(),
  heroes: [
    {
      name: 'any_hero_name',
      level: 1
    }
  ]
}

const mockRankingScore2 = {
  player: {
    name: 'other_player_name',
    country: 'other_player_country'
  },
  score: 2,
  matchDate: new Date(),
  heroes: [
    {
      name: 'other_hero_name',
      level: 2
    }
  ]
}

class LoadLastRakingRepositoryStub implements LoadLastRankingRepository {
  async loadLastRanking(): Promise<RankingScoreModel[]> {
    return [mockRankingScore1, mockRankingScore2]
  }
}

type SutTypes = {
  sut: LastRankingLoaderService
  loadLastRakingStub: LoadLastRakingRepositoryStub
}

const makeSut = (): SutTypes => {
  const loadLastRakingStub = new LoadLastRakingRepositoryStub()
  const sut = new LastRankingLoaderService(loadLastRakingStub)
  return {
    sut,
    loadLastRakingStub
  }
}

describe('LastRankingLoader Usecases', () => {
  it('should call LoadLastRankingRepository with correct method', async () => {
    const { sut, loadLastRakingStub } = makeSut()
    const loadLastRankingSpy = jest.spyOn(loadLastRakingStub, 'loadLastRanking')
    await sut.load()
    expect(loadLastRankingSpy).toHaveBeenCalledTimes(1)
  })
})

