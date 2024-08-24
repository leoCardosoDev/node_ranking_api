import { RankingScore } from '@/domain/entities'
import { LastRankingLoader } from '@/domain/usecases'
import { LoadLastRankingController } from '@/presentation/controllers'

const mockRankingScore: RankingScore[] = [{
  player: {
    name: 'any_player_name',
    country: 'any_player_country'
  },
  score: 1,
  matchDate: new Date(1578625200000),
  heroes: [
    {
      name: 'any_hero_name',
      level: 1
    },
    {
      name: 'other_hero_name',
      level: 2
    },
    {
      name: 'another_hero_name',
      level: 3
    }
  ]
}]


class LastRankingLoaderStub implements LastRankingLoader {
  async load(): Promise<RankingScore[]> {
    return mockRankingScore
  }
}

describe('LoadLastRanking Controller', () => {
  it('should call LastRankingLoader with correct values', async () => {
    const lastRankingLoaderStub = new LastRankingLoaderStub()
    const sut = new LoadLastRankingController(lastRankingLoaderStub)
    const loadSpy = jest.spyOn(lastRankingLoaderStub, 'load')
    await sut.handle()
    expect(loadSpy).toHaveBeenCalledWith()
    expect(loadSpy).toHaveBeenCalledTimes(1)
  })
})

