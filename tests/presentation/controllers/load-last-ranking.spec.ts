import { RankingScore } from '@/domain/entities'
import { LastRankingLoader } from '@/domain/usecases'
import { LoadLastRankingController } from '@/presentation/controllers'
import { RankingScoreViewModel } from '@/presentation/view-models'

const throwError = (): never => {
  throw new Error()
}

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

const mockRankingScoreViewModel: RankingScoreViewModel[] = [{
  player: {
    name: 'any_player_name',
    country: 'any_player_country'
  },
  score: 1,
  matchDate: '2020-01-10T03:00:00.000Z',
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

type SutTypes = {
  sut: LoadLastRankingController
  lastRankingLoaderStub: LastRankingLoaderStub
}

const makeSut = (): SutTypes => {
  const lastRankingLoaderStub = new LastRankingLoaderStub()
  const sut = new LoadLastRankingController(lastRankingLoaderStub)

  return {
    sut,
    lastRankingLoaderStub
  }
}

describe('LoadLastRanking Controller', () => {
  it('should call LastRankingLoader with correct values', async () => {
    const { sut, lastRankingLoaderStub } = makeSut()
    const loadSpy = jest.spyOn(lastRankingLoaderStub, 'load')
    await sut.handle()
    expect(loadSpy).toHaveBeenCalledWith()
    expect(loadSpy).toHaveBeenCalledTimes(1)
  })

  it('should returns an RankingViewModel on success', async () => {
    const { sut } = makeSut()
    const response = await sut.handle()
    expect(response).toEqual({
      statusCode: 200,
      data: mockRankingScoreViewModel
    })
  })

  it('should return 500 if LastRankingLoader throws', async () => {
    const { sut, lastRankingLoaderStub } = makeSut()
    jest.spyOn(lastRankingLoaderStub, 'load').mockImplementationOnce(throwError)
    const response = await sut.handle()
    expect(response).toEqual({
      statusCode: 500,
      data: new Error()
    })
  })
})

