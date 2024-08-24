import { FakeRankingRepository } from '@/infra/repositories'
import { RankingScoreModel } from '@/application/models'

jest.mock('@/infra/data-sources', () => ({
  ranking: [
    {
      user: {
        country: 'any_player_country',
        name: 'any_player_name'
      },
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
      ],
      date: 1578625200000,
      score: 1
    }
  ]
}));

const mockRankingScore: RankingScoreModel[] = [{
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

describe('FakeRankingRepository', () => {
  it('should return a RankingScoreModel array mapped correctly from the data source', async () => {
    const sut = new FakeRankingRepository()
    const response = await sut.loadLastRanking()
    expect(response).toEqual(mockRankingScore)
  })
})
