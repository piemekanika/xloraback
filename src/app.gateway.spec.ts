import { Test, TestingModule } from '@nestjs/testing';
import { ApGateway } from './app.gateway';

describe('ApGateway', () => {
  let gateway: ApGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApGateway],
    }).compile();

    gateway = module.get<ApGateway>(ApGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
