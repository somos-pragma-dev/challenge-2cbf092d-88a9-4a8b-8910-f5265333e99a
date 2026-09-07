import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from '../services/user.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from '../models/user.model';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';

describe('UserService', () => {
  let service: UserService;
  let repository: any;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getRepositoryToken(User),
          useValue: {
            create: jest.fn().mockReturnThis(),
            save: jest.fn().mockResolvedValue({} as any),
            find: jest.fn().mockResolvedValue([]),
            findOne: jest.fn().mockResolvedValue({} as any),
            update: jest.fn().mockResolvedValue({} as any),
            delete: jest.fn().mockResolvedValue(undefined),
          },
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
    repository = module.get(getRepositoryToken(User));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a user', async () => {
    const createUserDto: CreateUserDto = {
      name: 'John Doe',
      email: 'john@example.com',
      password: 'password123',
      role: 'user',
    };
    await service.create(createUserDto);
    expect(repository.create).toHaveBeenCalledWith(createUserDto);
    expect(repository.save).toHaveBeenCalled();
  });

  it('should find all users', async () => {
    await service.findAll();
    expect(repository.find).toHaveBeenCalled();
  });

  it('should find a user by ID', async () => {
    await service.findOne(1);
    expect(repository.findOne).toHaveBeenCalledWith(1);
  });

  it('should update a user by ID', async () => {
    const updateUserDto: UpdateUserDto = {
      name: 'John Doe',
      email: 'john@example.com',
      password: 'password123',
      role: 'user',
    };
    await service.update(1, updateUserDto);
    expect(repository.update).toHaveBeenCalledWith(1, updateUserDto);
  });

  it('should remove a user by ID', async () => {
    await service.remove(1);
    expect(repository.delete).toHaveBeenCalledWith(1);
  });
});